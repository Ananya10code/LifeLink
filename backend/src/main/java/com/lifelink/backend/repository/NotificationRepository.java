package com.lifelink.backend.repository;

import com.lifelink.backend.entity.Notification;
import com.lifelink.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository
        extends JpaRepository<Notification, Long> {

    List<Notification> findByUserOrderByCreatedAtDesc(User user);

    long countByUserAndReadStatusFalse(User user);
}
