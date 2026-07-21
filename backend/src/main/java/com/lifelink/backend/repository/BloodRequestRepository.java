package com.lifelink.backend.repository;

import com.lifelink.backend.entity.BloodRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.lifelink.backend.entity.User;
import java.util.List;
import java.util.Optional;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequest, Long> {

    @Query("SELECT COUNT(DISTINCT b.bloodGroup) FROM BloodRequest b")
    long countBloodGroups();

    @Query("SELECT COUNT(DISTINCT b.city) FROM BloodRequest b")
    long countCities();

    List<BloodRequest> findByCreatedBy(User user);

    Optional<BloodRequest> findByIdAndCreatedBy(Long id, User user);

    List<BloodRequest> findByStatus(String status);
}