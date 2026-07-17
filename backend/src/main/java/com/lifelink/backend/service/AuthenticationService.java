package com.lifelink.backend.service;

import com.lifelink.backend.dto.AuthResponse;
import com.lifelink.backend.dto.LoginRequest;
import com.lifelink.backend.dto.RegisterRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.UserRepository;
import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService,
            AuthenticationManager authenticationManager) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public ApiResponse register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return new ApiResponse(false, "Email already exists");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setBloodGroup(request.getBloodGroup());
        user.setPhone(request.getPhone());
        user.setCity(request.getCity());
        user.setRole(request.getRole());

        userRepository.save(user);

        return new ApiResponse(true, "Registration Successful");
    }

    public AuthResponse login(LoginRequest request) {

        System.out.println("Email = " + request.getEmail());
        System.out.println("Password = " + request.getPassword());

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        String token = jwtService.generateToken(request.getEmail());

        return new AuthResponse(token);
    }
}