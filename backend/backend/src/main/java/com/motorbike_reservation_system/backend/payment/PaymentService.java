package com.motorbike_reservation_system.backend.payment;


import com.motorbike_reservation_system.backend.Payment_Method.PaymentMethodRepo;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Repair_Service.RepairRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private RepairRepo repairRepo;

    @Autowired
    private PaymentMethodRepo paymentMethodRepo;


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

    public Payment addPayment(PaymentDTO paymentDTO) {
        Payment payment = Payment.builder()
                .totalPayment(paymentDTO.getTotalPayment())
                .paymentType(paymentDTO.getPaymentType())
                .repair(repairRepo.findByServiceId(paymentDTO.getServiceId()))
                .paymentMethod(paymentMethodRepo.findByPaymentMethodId(paymentDTO.getPaymentMethodId()))
                .build();
        return paymentRepository.save(payment);
    }


}