package com.lifelink.backend.dto;

public class DashboardResponse {

    private long totalRequests;
    private long totalDonors;
    private long bloodGroups;
    private long citiesCovered;

    public DashboardResponse() {
    }

    public DashboardResponse(long totalRequests,
            long totalDonors,
            long bloodGroups,
            long citiesCovered) {
        this.totalRequests = totalRequests;
        this.totalDonors = totalDonors;
        this.bloodGroups = bloodGroups;
        this.citiesCovered = citiesCovered;
    }

    public long getTotalRequests() {
        return totalRequests;
    }

    public void setTotalRequests(long totalRequests) {
        this.totalRequests = totalRequests;
    }

    public long getTotalDonors() {
        return totalDonors;
    }

    public void setTotalDonors(long totalDonors) {
        this.totalDonors = totalDonors;
    }

    public long getBloodGroups() {
        return bloodGroups;
    }

    public void setBloodGroups(long bloodGroups) {
        this.bloodGroups = bloodGroups;
    }

    public long getCitiesCovered() {
        return citiesCovered;
    }

    public void setCitiesCovered(long citiesCovered) {
        this.citiesCovered = citiesCovered;
    }
}