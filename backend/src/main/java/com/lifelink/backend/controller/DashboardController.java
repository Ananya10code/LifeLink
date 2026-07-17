package com.lifelink.backend.controller;

import com.lifelink.backend.dto.DashboardResponse;
import com.lifelink.backend.service.DashboardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    private final DashboardService service;

    public DashboardController(DashboardService service) {
        this.service = service;
    }

    @GetMapping
    public DashboardResponse getDashboard() {
        return service.getDashboard();
    }
}