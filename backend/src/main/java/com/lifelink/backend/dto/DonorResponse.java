package com.lifelink.backend.dto;

public class DonorResponse {

    private Long id;
    private String fullName;
    private String phone;
    private String city;
    private String bloodGroup;

    public DonorResponse() {
    }

    public DonorResponse(Long id,
            String fullName,
            String phone,
            String city,
            String bloodGroup) {

        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.city = city;
        this.bloodGroup = bloodGroup;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }
}