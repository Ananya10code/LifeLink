package com.lifelink.backend.controller;

import com.lifelink.backend.dto.ProfileResponse;
import com.lifelink.backend.dto.UpdateProfileRequest;
import com.lifelink.backend.service.ProfileService;
import jakarta.validation.Valid;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    private final ProfileService service;

    public ProfileController(ProfileService service) {
        this.service = service;
    }

    @GetMapping
    public ProfileResponse getProfile(Authentication authentication) {

        return service.getProfile(authentication.getName());

    }

    @PutMapping
    public ProfileResponse updateProfile(
            Authentication authentication,
            @Valid @RequestBody UpdateProfileRequest request) {

        return service.updateProfile(
                authentication.getName(),
                request);

    }
}