package com.lifelink.backend.repository;

import com.lifelink.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    long countByRole(String role);

    List<User> findByRole(String role);

    List<User> findByRoleAndBloodGroup(String role, String bloodGroup);

    List<User> findByRoleAndCity(String role, String city);

    List<User> findByRoleAndBloodGroupAndCity(
            String role,
            String bloodGroup,
            String city);
}