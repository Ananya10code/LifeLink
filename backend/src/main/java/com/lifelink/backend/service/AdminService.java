package com.lifelink.backend.service;

import com.lifelink.backend.dto.AdminDashboardResponse;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.repository.UserRepository;
import com.lifelink.backend.repository.VolunteerRepository;
import org.springframework.stereotype.Service;

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

    public AdminDashboardResponse getDashboard() {

        long totalUsers = userRepository.count();

        long totalDonors = userRepository.findByRole("DONOR").size();

        long totalRequests = bloodRequestRepository.count();

        long openRequests = bloodRequestRepository
                .findByStatus("OPEN")
                .size();

        long completedRequests = bloodRequestRepository
                .findByStatus("COMPLETED")
                .size();

        long totalVolunteers = volunteerRepository.count();

        return new AdminDashboardResponse(
                totalUsers,
                totalDonors,
                totalRequests,
                openRequests,
                completedRequests,
                totalVolunteers);
    }
}