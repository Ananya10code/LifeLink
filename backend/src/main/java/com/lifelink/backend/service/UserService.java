package com.lifelink.backend.service;

import com.lifelink.backend.dto.RegisterRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public String registerUser(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already exists!";
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        // Encrypt password
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setBloodGroup(request.getBloodGroup());
        user.setRole(request.getRole());

        userRepository.save(user);

        return "User Registered Successfully!";
    }

}
