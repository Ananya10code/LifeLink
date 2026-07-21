package com.lifelink.backend.repository;

import com.lifelink.backend.entity.BloodRequest;
import com.lifelink.backend.entity.User;
import com.lifelink.backend.entity.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VolunteerRepository extends JpaRepository<Volunteer, Long> {

    Optional<Volunteer> findByBloodRequestAndDonor(
            BloodRequest bloodRequest,
            User donor);

    List<Volunteer> findByBloodRequest(BloodRequest bloodRequest);

    List<Volunteer> findByDonor(User donor);

}