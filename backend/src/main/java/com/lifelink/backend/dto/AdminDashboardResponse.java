package com.lifelink.backend.dto;

public class AdminDashboardResponse {

    private long totalUsers;
    private long totalDonors;
    private long totalRequests;
    private long openRequests;
    private long completedRequests;
    private long totalVolunteers;

    public AdminDashboardResponse() {
    }

    public AdminDashboardResponse(
            long totalUsers,
            long totalDonors,
            long totalRequests,
            long openRequests,
            long completedRequests,
            long totalVolunteers) {

        this.totalUsers = totalUsers;
        this.totalDonors = totalDonors;
        this.totalRequests = totalRequests;
        this.openRequests = openRequests;
        this.completedRequests = completedRequests;
        this.totalVolunteers = totalVolunteers;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public long getTotalDonors() {
        return totalDonors;
    }

    public long getTotalRequests() {
        return totalRequests;
    }

    public long getOpenRequests() {
        return openRequests;
    }

    public long getCompletedRequests() {
        return completedRequests;
    }

    public long getTotalVolunteers() {
        return totalVolunteers;
    }
}