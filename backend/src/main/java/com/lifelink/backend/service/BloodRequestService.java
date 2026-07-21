package com.lifelink.backend.service;

import com.lifelink.backend.dto.BloodRequestDto;
import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.response.ApiResponse;
import org.springframework.stereotype.Service;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.UserRepository;

import java.util.List;

@Service
public class BloodRequestService {

    private final BloodRequestRepository repository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;

    public BloodRequestService(
            BloodRequestRepository repository,
            UserRepository userRepository,
            NotificationService notificationService) {

        this.repository = repository;
        this.userRepository = userRepository;
        this.notificationService = notificationService;
    }

    public ApiResponse createRequest(BloodRequestDto dto, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        BloodRequest request = new BloodRequest();

        request.setPatientName(dto.getPatientName());
        request.setHospital(dto.getHospital());
        request.setBloodGroup(dto.getBloodGroup());
        request.setUnits(dto.getUnits());
        request.setCity(dto.getCity());
        request.setUrgency(dto.getUrgency());
        request.setContact(dto.getContact());
        request.setStatus("OPEN");
        request.setCreatedBy(user);

        repository.save(request);
        List<User> donors = userRepository.findByRoleAndBloodGroupAndCity(
                "DONOR",
                request.getBloodGroup(),
                request.getCity());

        System.out.println("===== Notification Debug =====");
        System.out.println("Blood Group: " + request.getBloodGroup());
        System.out.println("City: " + request.getCity());
        System.out.println("Matching donors found: " + donors.size());

        for (User donor : donors) {

            System.out.println("Creating notification for: " + donor.getEmail());

            notificationService.createNotification(
                    donor,
                    "New " + request.getBloodGroup()
                            + " blood request at "
                            + request.getHospital()
                            + " (" + request.getCity() + ")");
        }

        System.out.println("===== End Debug =====");

        return new ApiResponse(true, "Blood request created successfully.");
    }

    public List<BloodRequest> getAllRequests() {
        return repository.findAll();
    }

    public List<BloodRequest> getMyRequests(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return repository.findByCreatedBy(user);

    }

    public ApiResponse completeRequest(Long id, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        BloodRequest request = repository
                .findByIdAndCreatedBy(id, user)
                .orElseThrow(() -> new RuntimeException("Blood request not found"));

        request.setStatus("COMPLETED");

        repository.save(request);

        return new ApiResponse(
                true,
                "Blood request marked as completed.");
    }
}