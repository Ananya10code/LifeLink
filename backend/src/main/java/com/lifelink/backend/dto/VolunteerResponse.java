package com.lifelink.backend.dto;

import java.time.LocalDateTime;

public class VolunteerResponse {

    private Long id;
    private String fullName;
    private String bloodGroup;
    private String phone;
    private String city;
    private LocalDateTime volunteeredAt;

    public VolunteerResponse() {
    }

    public VolunteerResponse(
            Long id,
            String fullName,
            String bloodGroup,
            String phone,
            String city,
            LocalDateTime volunteeredAt) {

        this.id = id;
        this.fullName = fullName;
        this.bloodGroup = bloodGroup;
        this.phone = phone;
        this.city = city;
        this.volunteeredAt = volunteeredAt;
    }

    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public String getPhone() {
        return phone;
    }

    public String getCity() {
        return city;
    }

    public LocalDateTime getVolunteeredAt() {
        return volunteeredAt;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setVolunteeredAt(LocalDateTime volunteeredAt) {
        this.volunteeredAt = volunteeredAt;
    }
}