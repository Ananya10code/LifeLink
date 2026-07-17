package com.lifelink.backend.service;

import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.entity.Volunteer;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.repository.UserRepository;
import com.lifelink.backend.repository.VolunteerRepository;
import com.lifelink.backend.response.ApiResponse;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class VolunteerService {

    private final VolunteerRepository volunteerRepository;
    private final BloodRequestRepository bloodRequestRepository;
    private final UserRepository userRepository;

    public VolunteerService(
            VolunteerRepository volunteerRepository,
            BloodRequestRepository bloodRequestRepository,
            UserRepository userRepository) {

        this.volunteerRepository = volunteerRepository;
        this.bloodRequestRepository = bloodRequestRepository;
        this.userRepository = userRepository;
    }

    public ApiResponse volunteer(Long requestId, String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        BloodRequest request = bloodRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Blood request not found"));

        if (volunteerRepository.existsByUserAndBloodRequest(user, request)) {
            return new ApiResponse(false, "You have already volunteered for this request.");
        }

        Volunteer volunteer = new Volunteer();

        volunteer.setUser(user);
        volunteer.setBloodRequest(request);
        volunteer.setVolunteeredAt(LocalDateTime.now());

        volunteerRepository.save(volunteer);

        return new ApiResponse(true, "Thank you for volunteering!");
    }

    public long getVolunteerCount(Long requestId) {

        BloodRequest request = bloodRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Blood request not found"));

        return volunteerRepository.countByBloodRequest(request);
    }
}