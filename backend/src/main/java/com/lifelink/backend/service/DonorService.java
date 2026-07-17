package com.lifelink.backend.service;

import com.lifelink.backend.dto.DonorResponse;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonorService {

    private final UserRepository repository;

    public DonorService(UserRepository repository) {
        this.repository = repository;
    }

    public List<DonorResponse> getDonors(String bloodGroup, String city) {

        List<User> donors;

        if (!bloodGroup.isEmpty() && !city.isEmpty()) {
            donors = repository.findByRoleAndBloodGroupAndCity(
                    "DONOR",
                    bloodGroup,
                    city);
        } else if (!bloodGroup.isEmpty()) {
            donors = repository.findByRoleAndBloodGroup(
                    "DONOR",
                    bloodGroup);
        } else if (!city.isEmpty()) {
            donors = repository.findByRoleAndCity(
                    "DONOR",
                    city);
        } else {
            donors = repository.findByRole("DONOR");
        }

        return donors.stream()
                .map(user -> new DonorResponse(
                        user.getId(),
                        user.getFullName(),
                        user.getBloodGroup(),
                        user.getCity(),
                        user.getPhone()))
                .collect(Collectors.toList());
    }
}