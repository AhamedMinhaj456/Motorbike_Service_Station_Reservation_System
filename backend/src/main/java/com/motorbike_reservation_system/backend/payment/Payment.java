package com.motorbike_reservation_system.backend.payment;

import com.motorbike_reservation_system.backend.Payment_Method.PaymentMethod;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import jakarta.persistence.*;

import java.util.Random;


@Entity
@Table(name="payment")
public class Payment {

    @Id
    private String paymentId;
    private String totalPayment;
    private String paymentType;


    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "repair_id")
    private Repair repair;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "payment_method_id")
    private PaymentMethod paymentMethod;

    public Payment() {
    }

    public Payment(String paymentId, String totalPayment, String paymentType, Repair repair, PaymentMethod paymentMethod) {
        this.paymentId = paymentId;
        this.totalPayment = totalPayment;
        this.paymentType = paymentType;
        this.repair = repair;
        this.paymentMethod = paymentMethod;
    }

    public Payment(String totalPayment, String paymentType, Repair repair, PaymentMethod paymentMethod) {
        this.totalPayment = totalPayment;
        this.paymentType = paymentType;
        this.repair = repair;
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(String totalPayment) {
        this.totalPayment = totalPayment;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public Repair getRepair() {
        return repair;
    }

    public void setRepair(Repair repair) {
        this.repair = repair;
    }

    public PaymentMethod getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "paymentId='" + paymentId + '\'' +
                ", totalPayment='" + totalPayment + '\'' +
                ", paymentType='" + paymentType + '\'' +
                ", repair=" + repair +
                ", paymentMethod=" + paymentMethod +
                '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (paymentId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.paymentId = "PAYD" + randomDigits;
        }
    }

    private String generateRandomDigits(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }

}
