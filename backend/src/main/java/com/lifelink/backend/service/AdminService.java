package com.lifelink.backend.service;

import com.lifelink.backend.dto.UserResponse;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.repository.UserRepository;
import com.lifelink.backend.repository.VolunteerRepository;
import com.lifelink.backend.response.ApiResponse;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AdminService {

        private final UserRepository userRepository;
        private final BloodRequestRepository bloodRequestRepository;
        private final VolunteerRepository volunteerRepository;

        public AdminService(
                        UserRepository userRepository,
                        BloodRequestRepository bloodRequestRepository,
                        VolunteerRepository volunteerRepository) {

                this.userRepository = userRepository;
                this.bloodRequestRepository = bloodRequestRepository;
                this.volunteerRepository = volunteerRepository;
        }

        // Dashboard Statistics
        public Map<String, Long> getDashboardStats() {

                Map<String, Long> map = new HashMap<>();

                map.put("users", userRepository.count());
                map.put("requests", bloodRequestRepository.count());
                map.put("volunteers", volunteerRepository.count());
                map.put("donors", userRepository.countByRole("DONOR"));

                return map;
        }

        // Get All Users
        public List<UserResponse> getAllUsers() {

                return userRepository.findAll()
                                .stream()
                                .map(user -> new UserResponse(
                                                user.getId(),
                                                user.getFullName(),
                                                user.getEmail(),
                                                user.getRole(),
                                                user.getBloodGroup(),
                                                user.getCity()))
                                .collect(Collectors.toList());
        }

        // Delete User
        public ApiResponse deleteUser(Long id) {

                User user = userRepository.findById(id)
                                .orElseThrow(() -> new RuntimeException("User not found"));

                userRepository.delete(user);

                return new ApiResponse(
                                true,
                                "User deleted successfully.");
        }

}