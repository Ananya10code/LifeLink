package com.lifelink.backend.service;

import com.lifelink.backend.dto.DonorResponse;
import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonorService {

    private final UserRepository userRepository;
    private final BloodRequestRepository bloodRequestRepository;

    public DonorService(
            UserRepository userRepository,
            BloodRequestRepository bloodRequestRepository) {

        this.userRepository = userRepository;
        this.bloodRequestRepository = bloodRequestRepository;
    }

    // Existing donor search
    public List<DonorResponse> getDonors(String bloodGroup, String city) {

        List<User> donors;

        if (!bloodGroup.isEmpty() && !city.isEmpty()) {

            donors = userRepository.findByRoleAndBloodGroupAndCity(
                    "DONOR",
                    bloodGroup,
                    city);

        } else if (!bloodGroup.isEmpty()) {

            donors = userRepository.findByRoleAndBloodGroup(
                    "DONOR",
                    bloodGroup);

        } else if (!city.isEmpty()) {

            donors = userRepository.findByRoleAndCity(
                    "DONOR",
                    city);

        } else {

            donors = userRepository.findByRole("DONOR");

        }

        return donors.stream()
                .map(user -> new DonorResponse(
                        user.getId(),
                        user.getFullName(),
                        user.getPhone(),
                        user.getCity(),
                        user.getBloodGroup()))
                .collect(Collectors.toList());
    }

    // NEW - Match donors for a blood request
    public List<DonorResponse> getMatchingDonors(Long requestId) {

        BloodRequest request = bloodRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Blood request not found"));

        List<User> donors = userRepository.findByRoleAndBloodGroupAndCity(
                "DONOR",
                request.getBloodGroup(),
                request.getCity());

        return donors.stream()
                .map(user -> new DonorResponse(
                        user.getId(),
                        user.getFullName(),
                        user.getPhone(),
                        user.getCity(),
                        user.getBloodGroup()))
                .collect(Collectors.toList());
    }

}