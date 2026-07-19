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

        // Get logged-in donor
        User donor = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Get blood request
        BloodRequest request = bloodRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Blood request not found"));

        // Don't allow volunteering if already accepted
        if ("ACCEPTED".equals(request.getStatus())) {

            return new ApiResponse(
                    false,
                    "This blood request has already been accepted.");
        }

        // Prevent duplicate volunteering
        if (volunteerRepository
                .findByBloodRequestAndDonor(request, donor)
                .isPresent()) {

            return new ApiResponse(
                    false,
                    "You have already volunteered for this request.");
        }

        // Create volunteer record
        Volunteer volunteer = new Volunteer();

        volunteer.setBloodRequest(request);
        volunteer.setDonor(donor);
        volunteer.setVolunteeredAt(LocalDateTime.now());

        volunteerRepository.save(volunteer);

        // Update request status
        request.setStatus("ACCEPTED");

        bloodRequestRepository.save(request);

        return new ApiResponse(
                true,
                "Volunteer registered successfully.");
    }
}