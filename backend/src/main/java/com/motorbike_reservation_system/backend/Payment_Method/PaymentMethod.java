package com.motorbike_reservation_system.backend.Payment_Method;

import com.motorbike_reservation_system.backend.payment.Payment;
import jakarta.persistence.*;

@Entity
@Table(name = "Payment_Method")
public class PaymentMethod {

    @Id
    @GeneratedValue
    private String paymentMethodId;
    private String paymentType;
    private String cardNumber;
    private String cardHolderName;
    private double totalPayment;

    @OneToOne(mappedBy = "paymentMethod",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private Payment payment;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "payment_method_id")
    private PaymentMethod paymentMethod;

    public PaymentMethod() {
    }

    public PaymentMethod(String paymentId, String paymentType, String cardNumber, String cardHolderName, double totalPayment, Payment payment) {
        this.paymentMethodId = paymentId;
        this.paymentType = paymentType;
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.totalPayment = totalPayment;
        this.payment = payment;
    }

    public PaymentMethod(String paymentType, String cardNumber, String cardHolderName, double totalPayment, Payment payment) {
        this.paymentType = paymentType;
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.totalPayment = totalPayment;
        this.payment = payment;
    }

    @Override
    public String toString() {
        return "PaymentMethod{" +
                "paymentId='" + paymentMethodId + '\'' +
                ", paymentType='" + paymentType + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", cardHolderName='" + cardHolderName + '\'' +
                ", totalPayment=" + totalPayment +
                ", payment=" + payment +
                '}';
    }

    public String getPaymentId() {
        return paymentMethodId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentMethodId = paymentId;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public double getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(double totalPayment) {
        this.totalPayment = totalPayment;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }
}
