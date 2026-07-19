package com.lifelink.backend.dto;

import java.time.LocalDateTime;

public class VolunteerResponse {

    private Long id;
    private Long requestId;
    private String donorName;
    private String donorEmail;
    private String donorPhone;
    private LocalDateTime volunteeredAt;

    public VolunteerResponse() {
    }

    public VolunteerResponse(
            Long id,
            Long requestId,
            String donorName,
            String donorEmail,
            String donorPhone,
            LocalDateTime volunteeredAt) {

        this.id = id;
        this.requestId = requestId;
        this.donorName = donorName;
        this.donorEmail = donorEmail;
        this.donorPhone = donorPhone;
        this.volunteeredAt = volunteeredAt;
    }

    public Long getId() {
        return id;
    }

    public Long getRequestId() {
        return requestId;
    }

    public String getDonorName() {
        return donorName;
    }

    public String getDonorEmail() {
        return donorEmail;
    }

    public String getDonorPhone() {
        return donorPhone;
    }

    public LocalDateTime getVolunteeredAt() {
        return volunteeredAt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public void setDonorName(String donorName) {
        this.donorName = donorName;
    }

    public void setDonorEmail(String donorEmail) {
        this.donorEmail = donorEmail;
    }

    public void setDonorPhone(String donorPhone) {
        this.donorPhone = donorPhone;
    }

    public void setVolunteeredAt(LocalDateTime volunteeredAt) {
        this.volunteeredAt = volunteeredAt;
    }
}