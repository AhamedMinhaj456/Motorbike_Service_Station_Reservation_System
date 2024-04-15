package com.motorbike_reservation_system.backend.Authentication.Admin.Repo;

import com.motorbike_reservation_system.backend.Authentication.Admin.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer> {

    Optional<Admin> findOneByAdminEmailAndAdminPassword(String adminEmail, String adminPassword);
    Admin findByAdminEmail(String adminEmail);
}

