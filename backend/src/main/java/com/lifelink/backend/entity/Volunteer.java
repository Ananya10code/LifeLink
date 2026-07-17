package com.lifelink.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "volunteers")
public class Volunteer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "blood_request_id")
    private BloodRequest bloodRequest;

    private LocalDateTime volunteeredAt;

    public Volunteer() {
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BloodRequest getBloodRequest() {
        return bloodRequest;
    }

    public void setBloodRequest(BloodRequest bloodRequest) {
        this.bloodRequest = bloodRequest;
    }

    public LocalDateTime getVolunteeredAt() {
        return volunteeredAt;
    }

    public void setVolunteeredAt(LocalDateTime volunteeredAt) {
        this.volunteeredAt = volunteeredAt;
    }
}