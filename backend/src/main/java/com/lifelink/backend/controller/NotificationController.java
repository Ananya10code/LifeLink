package com.lifelink.backend.controller;

import com.lifelink.backend.dto.NotificationResponse;
import com.lifelink.backend.service.NotificationService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "http://localhost:5173")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping
    public List<NotificationResponse> getNotifications(
            Authentication authentication) {

        return notificationService.getMyNotifications(
                authentication.getName());
    }

    @GetMapping("/unread-count")
    public long unreadCount(Authentication authentication) {

        return notificationService.getUnreadCount(
                authentication.getName());
    }

    @PutMapping("/{id}/read")
    public void markAsRead(@PathVariable Long id) {

        notificationService.markAsRead(id);

    }

}