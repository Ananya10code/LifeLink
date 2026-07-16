package com.lifelink.backend.service;

import com.lifelink.backend.dto.BloodRequestDto;
import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.repository.BloodRequestRepository;
import com.lifelink.backend.response.ApiResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodRequestService {

    private final BloodRequestRepository repository;

    public BloodRequestService(BloodRequestRepository repository) {
        this.repository = repository;
    }

    public ApiResponse createRequest(BloodRequestDto dto) {

        BloodRequest request = new BloodRequest();

        request.setPatientName(dto.getPatientName());
        request.setHospital(dto.getHospital());
        request.setBloodGroup(dto.getBloodGroup());
        request.setUnits(dto.getUnits());
        request.setCity(dto.getCity());
        request.setUrgency(dto.getUrgency());
        request.setContact(dto.getContact());

        repository.save(request);

        return new ApiResponse(true, "Blood request created successfully.");
    }

    public List<BloodRequest> getAllRequests() {
        return repository.findAll();
    }
}