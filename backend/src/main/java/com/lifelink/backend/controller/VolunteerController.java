package com.lifelink.backend.controller;

import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.service.VolunteerService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import com.lifelink.backend.dto.VolunteerResponse;
import org.springframework.security.core.Authentication;
import java.util.List;

@RestController
@RequestMapping("/api/volunteers")
@CrossOrigin(origins = "http://localhost:5173")
public class VolunteerController {

    private final VolunteerService volunteerService;

    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    @PostMapping("/{requestId}")
    public ApiResponse volunteer(
            @PathVariable Long requestId,
            Authentication authentication) {

        return volunteerService.volunteer(
                requestId,
                authentication.getName());

    }

    @GetMapping("/request/{requestId}")
    public List<VolunteerResponse> getVolunteers(
            @PathVariable Long requestId,
            Authentication authentication) {

        return volunteerService.getVolunteers(
                requestId,
                authentication.getName());

    }
}