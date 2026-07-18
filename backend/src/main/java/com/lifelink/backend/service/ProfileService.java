package com.lifelink.backend.service;

import com.lifelink.backend.dto.ProfileResponse;
import com.lifelink.backend.dto.UpdateProfileRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final UserRepository userRepository;

    public ProfileService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ProfileResponse getProfile(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new ProfileResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPhone(),
                user.getCity(),
                user.getBloodGroup(),
                user.getRole());
    }

    public ProfileResponse updateProfile(
            String email,
            UpdateProfileRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(request.getFullName());
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setBloodGroup(request.getBloodGroup());

        userRepository.save(user);

        return new ProfileResponse(
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getPhone(),
                user.getCity(),
                user.getBloodGroup(),
                user.getRole());
    }
}