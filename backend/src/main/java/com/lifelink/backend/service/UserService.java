package com.lifelink.backend.service;

import com.lifelink.backend.dto.LoginRequest;
import com.lifelink.backend.dto.LoginResponse;
import com.lifelink.backend.dto.ProfileResponse;
import com.lifelink.backend.dto.RegisterRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.UserRepository;
import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.security.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.lifelink.backend.dto.UpdateProfileRequest;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository,
            BCryptPasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public ApiResponse registerUser(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return new ApiResponse(false, "Email already exists!");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setBloodGroup(request.getBloodGroup());
        user.setRole(request.getRole());

        userRepository.save(user);

        return new ApiResponse(true, "User Registered Successfully!");
    }

    public LoginResponse loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid Email or Password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid Email or Password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new LoginResponse(token);
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

    public ApiResponse updateProfile(
            String email,
            UpdateProfileRequest request) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setFullName(request.getFullName());
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setBloodGroup(request.getBloodGroup());

        userRepository.save(user);

        return new ApiResponse(
                true,
                "Profile updated successfully");
    }
}