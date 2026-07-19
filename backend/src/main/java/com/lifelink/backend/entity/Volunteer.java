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
    @JoinColumn(name = "blood_request_id")
    private BloodRequest bloodRequest;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private User donor;

    private LocalDateTime volunteeredAt;

    public Volunteer() {
    }

    public Volunteer(Long id,
            BloodRequest bloodRequest,
            User donor,
            LocalDateTime volunteeredAt) {

        this.id = id;
        this.bloodRequest = bloodRequest;
        this.donor = donor;
        this.volunteeredAt = volunteeredAt;
    }

    public Long getId() {
        return id;
    }

    public BloodRequest getBloodRequest() {
        return bloodRequest;
    }

    public void setBloodRequest(BloodRequest bloodRequest) {
        this.bloodRequest = bloodRequest;
    }

    public User getDonor() {
        return donor;
    }

    public void setDonor(User donor) {
        this.donor = donor;
    }

    public LocalDateTime getVolunteeredAt() {
        return volunteeredAt;
    }

    public void setVolunteeredAt(LocalDateTime volunteeredAt) {
        this.volunteeredAt = volunteeredAt;
    }

    public void setId(Long id) {
        this.id = id;
    }
}