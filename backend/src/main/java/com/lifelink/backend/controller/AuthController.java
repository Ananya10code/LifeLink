package com.lifelink.backend.controller;

import com.lifelink.backend.dto.AuthResponse;

import com.lifelink.backend.dto.LoginRequest;
import com.lifelink.backend.dto.RegisterRequest;
import com.lifelink.backend.response.ApiResponse;

import com.lifelink.backend.service.AuthenticationService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthenticationService authenticationService;

    public AuthController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ApiResponse register(@Valid @RequestBody RegisterRequest request) {
        return authenticationService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authenticationService.login(request);
    }
}