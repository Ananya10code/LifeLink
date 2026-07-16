package com.lifelink.backend.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class BloodRequestDto {

    @NotBlank(message = "Patient name is required")
    private String patientName;

    @NotBlank(message = "Hospital name is required")
    private String hospital;

    @NotBlank(message = "Blood group is required")
    private String bloodGroup;

    @NotNull(message = "Units are required")
    @Min(value = 1, message = "Units must be at least 1")
    private Integer units;

    @NotBlank(message = "City is required")
    private String city;

    @NotBlank(message = "Urgency is required")
    private String urgency;

    @NotBlank(message = "Contact number is required")
    private String contact;

    public BloodRequestDto() {
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUrgency() {
        return urgency;
    }

    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }
}