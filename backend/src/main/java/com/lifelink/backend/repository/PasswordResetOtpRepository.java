package com.lifelink.backend.repository;

import com.lifelink.backend.entity.PasswordResetOtp;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PasswordResetOtpRepository
        extends JpaRepository<PasswordResetOtp, Long> {

    Optional<PasswordResetOtp> findByEmail(String email);

    @Transactional
    void deleteByEmail(String email);
}