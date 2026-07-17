package com.lifelink.backend.repository;

import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.entity.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

    boolean existsByUserAndBloodRequest(User user, BloodRequest bloodRequest);

    long countByBloodRequest(BloodRequest bloodRequest);
}