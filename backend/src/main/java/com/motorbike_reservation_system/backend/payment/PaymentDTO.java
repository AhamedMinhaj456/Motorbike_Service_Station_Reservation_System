package com.motorbike_reservation_system.backend.payment;


import lombok.Builder;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;

@Builder
@Getter
public class PaymentDTO {

    private String paymentId;
    private String totalPayment;
    private String paymentType;
    private String serviceId;
    private String paymentMethodId;
}
