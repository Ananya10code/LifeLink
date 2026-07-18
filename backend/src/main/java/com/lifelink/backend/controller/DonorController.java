package com.lifelink.backend.controller;

import com.lifelink.backend.dto.DonorResponse;
import com.lifelink.backend.service.DonorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donors")
@CrossOrigin(origins = "http://localhost:5173")
public class DonorController {

    private final DonorService service;

    public DonorController(DonorService service) {
        this.service = service;
    }

    // Existing donor search
    @GetMapping
    public List<DonorResponse> getDonors(

            @RequestParam(defaultValue = "") String bloodGroup,

            @RequestParam(defaultValue = "") String city

    ) {

        return service.getDonors(bloodGroup, city);

    }

    // NEW: Matching donors for a blood request
    @GetMapping("/match/{requestId}")
    public List<DonorResponse> getMatchingDonors(
            @PathVariable Long requestId) {

        return service.getMatchingDonors(requestId);

    }

}