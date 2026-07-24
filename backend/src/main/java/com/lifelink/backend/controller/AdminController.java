package com.lifelink.backend.controller;

import com.lifelink.backend.dto.UserResponse;
import com.lifelink.backend.response.ApiResponse;
import com.lifelink.backend.service.AdminService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/dashboard")
    public Map<String, Long> dashboard() {
        return adminService.getDashboardStats();
    }

    @GetMapping("/users")
    public List<UserResponse> getAllUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/users/{id}")
    public ApiResponse deleteUser(@PathVariable Long id) {
        return adminService.deleteUser(id);
    }
}