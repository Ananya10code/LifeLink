package com.lifelink.backend.controller;

import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.service.VolunteerService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/volunteer")
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

        String email = authentication.getName();

        return volunteerService.volunteer(requestId, email);
    }

    @GetMapping("/count/{requestId}")
    public long getVolunteerCount(@PathVariable Long requestId) {

        return volunteerService.getVolunteerCount(requestId);

    }
}
