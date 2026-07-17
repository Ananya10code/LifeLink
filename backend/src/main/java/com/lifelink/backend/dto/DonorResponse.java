package com.lifelink.backend.dto;

public class DonorResponse {

    private Long id;
    private String fullName;
    private String bloodGroup;
    private String city;
    private String phone;

    public DonorResponse() {
    }

    public DonorResponse(Long id, String fullName,
            String bloodGroup,
            String city,
            String phone) {
        this.id = id;
        this.fullName = fullName;
        this.bloodGroup = bloodGroup;
        this.city = city;
        this.phone = phone;
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

    public String getCity() {
        return city;
    }

    public String getPhone() {
        return phone;
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

    public void setCity(String city) {
        this.city = city;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}