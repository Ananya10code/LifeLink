package com.lifelink.backend.controller;

import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.dto.RegisterRequest;
import com.lifelink.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ApiResponse register(@Valid @RequestBody RegisterRequest request) {

        return userService.registerUser(request);

    }

}