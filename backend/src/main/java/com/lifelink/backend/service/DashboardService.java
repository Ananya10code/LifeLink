package com.lifelink.backend.service;

import com.lifelink.backend.dto.DashboardResponse;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final BloodRequestRepository bloodRepository;
    private final UserRepository userRepository;

    public DashboardService(BloodRequestRepository bloodRepository,
            UserRepository userRepository) {
        this.bloodRepository = bloodRepository;
        this.userRepository = userRepository;
    }

    public DashboardResponse getDashboard() {

        long requests = bloodRepository.count();
        long donors = userRepository.countByRole("DONOR");
        long bloodGroups = bloodRepository.countBloodGroups();
        long cities = bloodRepository.countCities();

        return new DashboardResponse(
                requests,
                donors,
                bloodGroups,
                cities);
    }
}
