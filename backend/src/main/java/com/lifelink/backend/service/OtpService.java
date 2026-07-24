package com.lifelink.backend.service;

import com.lifelink.backend.entity.PasswordResetOtp;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.PasswordResetOtpRepository;
import com.lifelink.backend.repository.UserRepository;
import com.lifelink.backend.response.ApiResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {

    private final PasswordResetOtpRepository otpRepository;
    private final UserRepository userRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    public OtpService(
            PasswordResetOtpRepository otpRepository,
            UserRepository userRepository,
            EmailService emailService,
            PasswordEncoder passwordEncoder) {

        this.otpRepository = otpRepository;
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.passwordEncoder = passwordEncoder;
    }

    // Send OTP
    public ApiResponse sendOtp(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email not registered"));

        otpRepository.deleteByEmail(email);

        String otp = String.format("%06d", new Random().nextInt(999999));

        PasswordResetOtp resetOtp = new PasswordResetOtp();
        resetOtp.setEmail(email);
        resetOtp.setOtp(otp);
        resetOtp.setExpiryTime(LocalDateTime.now().plusMinutes(5));

        otpRepository.save(resetOtp);

        emailService.sendEmail(
                email,
                "LifeLink Password Reset OTP",
                "Your OTP is: " + otp + "\nValid for 5 minutes.");

        return new ApiResponse(true, "OTP sent successfully.");
    }

    // Verify OTP
    public ApiResponse verifyOtp(String email, String otp) {

        PasswordResetOtp resetOtp = otpRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("OTP not found"));

        if (resetOtp.getExpiryTime().isBefore(LocalDateTime.now())) {
            return new ApiResponse(false, "OTP expired.");
        }

        if (!resetOtp.getOtp().equals(otp)) {
            return new ApiResponse(false, "Invalid OTP.");
        }

        return new ApiResponse(true, "OTP verified.");
    }

    // Reset Password
    public ApiResponse resetPassword(
            String email,
            String otp,
            String newPassword) {

        PasswordResetOtp resetOtp = otpRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("OTP not found"));

        if (resetOtp.getExpiryTime().isBefore(LocalDateTime.now())) {
            return new ApiResponse(false, "OTP expired.");
        }

        if (!resetOtp.getOtp().equals(otp)) {
            return new ApiResponse(false, "Invalid OTP.");
        }

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setPassword(passwordEncoder.encode(newPassword));

        userRepository.save(user);

        otpRepository.deleteByEmail(email);

        return new ApiResponse(true, "Password reset successful.");
    }
}