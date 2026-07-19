package com.lifelink.backend.controller;

import com.lifelink.backend.dto.BloodRequestDto;
import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.service.BloodRequestService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/blood-requests")
@CrossOrigin(origins = "http://localhost:5173")
public class BloodRequestController {

    private final BloodRequestService service;

    public BloodRequestController(BloodRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ApiResponse createRequest(
            @RequestBody BloodRequestDto dto,
            Authentication authentication) {

        return service.createRequest(
                dto,
                authentication.getName());
    }

    @GetMapping
    public List<BloodRequest> getAllRequests() {
        return service.getAllRequests();
    }

    @GetMapping("/my")
    public List<BloodRequest> getMyRequests(
            Authentication authentication) {

        return service.getMyRequests(
                authentication.getName());

    }

    @PutMapping("/{id}/complete")
    public ApiResponse completeRequest(
            @PathVariable Long id,
            Authentication authentication) {

        return service.completeRequest(
                id,
                authentication.getName());
    }
}