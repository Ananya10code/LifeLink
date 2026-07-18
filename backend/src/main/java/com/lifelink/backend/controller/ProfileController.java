package com.lifelink.backend.controller;

import com.lifelink.backend.dto.ProfileResponse;
import com.lifelink.backend.dto.UpdateProfileRequest;
import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    private final UserService userService;

    public ProfileController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ProfileResponse getProfile(Authentication authentication) {

        return userService.getProfile(authentication.getName());

    }

    @PutMapping
    public ApiResponse updateProfile(
            Authentication authentication,
            @RequestBody UpdateProfileRequest request) {

        return userService.updateProfile(
                authentication.getName(),
                request);

    }

}