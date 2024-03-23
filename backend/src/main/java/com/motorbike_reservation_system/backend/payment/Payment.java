package com.motorbike_reservation_system.backend.payment;

import com.motorbike_reservation_system.backend.Payment_Method.PaymentMethod;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import jakarta.persistence.*;


@Entity
@Table(name="payment")
public class Payment {

    @Id
    @GeneratedValue
    private String paymentId;
    private String TotalAmount;
    private String paymentType;


    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "repair_id")
    private Repair repair;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "payment_method_id")
    private PaymentMethod paymentMethod;

    public Payment() {
    }

    public Payment(String paymentId, String totalAmount, String paymentType, Repair repair, PaymentMethod paymentMethod) {
        this.paymentId = paymentId;
        TotalAmount = totalAmount;
        this.paymentType = paymentType;
        this.repair = repair;
        this.paymentMethod = paymentMethod;
    }

    public Payment(String totalAmount, String paymentType, Repair repair, PaymentMethod paymentMethod) {
        TotalAmount = totalAmount;
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

    public String getTotalAmount() {
        return TotalAmount;
    }

    public void setTotalAmount(String totalAmount) {
        TotalAmount = totalAmount;
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
                ", TotalAmount='" + TotalAmount + '\'' +
                ", paymentType='" + paymentType + '\'' +
                ", repair=" + repair +
                ", paymentMethod=" + paymentMethod +
                '}';
    }


}
