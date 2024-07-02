package com.motorbike_reservation_system.backend.payment;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,String> {
    Payment findByPaymentId(String paymentId);
}
