package com.motorbike_reservation_system.backend.Authentication.Customer.Repo;

import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface CustomerRepo extends JpaRepository<Customer,Integer> {

    Optional<Customer> findOneByCustomerEmailAndCustomerPassword(String customerEmail, String customerPassword);
    Customer findByCustomerEmail(String customerEmail);

    Customer findByCustomerId(int customerId);

    @Modifying
    @Transactional
    @Query("UPDATE Customer u SET u.activeStatus = :activeStatus WHERE u.customerId = :customerId")
    void updateActiveStatus(@Param("customerId") int customerId, @Param("activeStatus") String activeStatus);


}
