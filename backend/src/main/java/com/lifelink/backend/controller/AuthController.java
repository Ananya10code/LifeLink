package com.lifelink.backend.controller;

import com.lifelink.backend.dto.AuthResponse;

import com.lifelink.backend.dto.LoginRequest;
import com.lifelink.backend.dto.RegisterRequest;
import com.lifelink.backend.response.ApiResponse;

import com.lifelink.backend.service.AuthenticationService;
import com.lifelink.backend.service.OtpService;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import com.lifelink.backend.dto.ForgotPasswordRequest;
import com.lifelink.backend.dto.VerifyOtpRequest;
import com.lifelink.backend.dto.ResetPasswordRequest;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthenticationService authenticationService;
    private final OtpService otpService;

    public AuthController(
            AuthenticationService authenticationService,
            OtpService otpService) {

        this.authenticationService = authenticationService;
        this.otpService = otpService;
    }

    @PostMapping("/register")
    public ApiResponse register(@Valid @RequestBody RegisterRequest request) {
        return authenticationService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authenticationService.login(request);
    }

    @PostMapping("/forgot-password")
    public ApiResponse forgotPassword(
            @RequestBody ForgotPasswordRequest request) {

        return otpService.sendOtp(request.getEmail());
    }

    @PostMapping("/verify-otp")
    public ApiResponse verifyOtp(
            @RequestBody VerifyOtpRequest request) {

        return otpService.verifyOtp(
                request.getEmail(),
                request.getOtp());
    }

    @PostMapping("/reset-password")
    public ApiResponse resetPassword(
            @RequestBody ResetPasswordRequest request) {

        return otpService.resetPassword(
                request.getEmail(),
                request.getOtp(),
                request.getNewPassword());
    }
}