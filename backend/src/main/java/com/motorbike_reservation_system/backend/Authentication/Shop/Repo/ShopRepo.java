package com.motorbike_reservation_system.backend.Authentication.Shop.Repo;

import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface ShopRepo extends JpaRepository<Shop,Integer> {

    Optional<Shop> findOneByEmailAndShopPassword(String Email, String ShopPassword);
    Shop findByEmail(String Email);
}