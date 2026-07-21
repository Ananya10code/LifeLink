package com.lifelink.backend.service;

import com.lifelink.backend.dto.NotificationResponse;
import com.lifelink.backend.entity.Notification;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.repository.NotificationRepository;
import com.lifelink.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;

    public NotificationService(
            NotificationRepository notificationRepository,
            UserRepository userRepository) {

        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
    }

    public void createNotification(User user, String message) {

        Notification notification = new Notification();

        notification.setUser(user);
        notification.setMessage(message);
        notification.setCreatedAt(LocalDateTime.now());
        notification.setReadStatus(false);

        notificationRepository.save(notification);
    }

    public List<NotificationResponse> getMyNotifications(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return notificationRepository
                .findByUserOrderByCreatedAtDesc(user)
                .stream()
                .map(notification -> new NotificationResponse(
                        notification.getId(),
                        notification.getMessage(),
                        notification.isReadStatus(),
                        notification.getCreatedAt()))
                .collect(Collectors.toList());
    }

    public long getUnreadCount(String email) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return notificationRepository.countByUserAndReadStatusFalse(user);
    }

    public void markAsRead(Long id) {

        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Notification not found"));

        notification.setReadStatus(true);

        notificationRepository.save(notification);
    }

}