package com.motorbike_reservation_system.backend.payment;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;



    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }


    public List<Payment> getPayment() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentByPaymentId(String paymentId) {
        return paymentRepository.findByPaymentId(paymentId);
    }

    public String deletePayment(String paymentId) {
        paymentRepository.deleteById(paymentId);
        return "Payment " + paymentId + "  removed successfully !! " ;
    }

    public Payment updatePayment(Payment payment) {
        Payment existingPayment = paymentRepository.findByPaymentId(payment.getPaymentId());
        existingPayment.setTotalPayment(payment.getTotalPayment());
        existingPayment.setPaymentType(payment.getPaymentType());
        existingPayment.setPaymentMethod(payment.getPaymentMethod());
        return paymentRepository.save(existingPayment);
    }




}