package com.motorbike_reservation_system.backend.Payment_Method;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Motorbike.MotorbikeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentMethodService {
    @Autowired
    private PaymentMethodRepo paymentMethodRepo;



    public PaymentMethod savePaymentMethod(PaymentMethod paymentMethod) {
        return paymentMethodRepo.save(paymentMethod);
    }



    public List<PaymentMethod> getPaymentMethod() {
        return paymentMethodRepo.findAll();
    }

    public PaymentMethod getPaymentMethodByPaymentMethodId(String paymentMethodId) {
        return paymentMethodRepo.findByPaymentMethodId(paymentMethodId);
    }


    public String deletePaymentMethod(String paymentMethodId) {
        paymentMethodRepo.deleteById(paymentMethodId);
        return "PaymentMethod " + paymentMethodId + " removed !! " ;
    }

    public PaymentMethod updatePaymentMethod(PaymentMethod paymentMethod) {
        PaymentMethod existingPaymentMethod = paymentMethodRepo.findByPaymentMethodId(paymentMethod.getPaymentMethodId());
        existingPaymentMethod.setCardHolderName(paymentMethod.getCardHolderName());
        existingPaymentMethod.setCardNumber(paymentMethod.getCardNumber());
        existingPaymentMethod.setCvv(paymentMethod.getCvv());
        existingPaymentMethod.setCardExpiryDate(paymentMethod.getCardExpiryDate());
        existingPaymentMethod.setPaymentType(paymentMethod.getPaymentType());
        return paymentMethodRepo.save(existingPaymentMethod);
    }



}

