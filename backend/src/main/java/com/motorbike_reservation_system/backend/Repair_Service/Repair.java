package com.motorbike_reservation_system.backend.Repair_Service;

import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import com.motorbike_reservation_system.backend.Feedback.Feedback;
import com.motorbike_reservation_system.backend.payment.Payment;
import jakarta.persistence.*;

import java.sql.Time;
import java.util.Date;
import java.util.Random;

@Entity
@Table(name = "Repair Service")
public class Repair {
    @Id
    private String serviceId;
    private Time serviceTime;
    private Date serviceDate;
    private String serviceStatus;
    private String serviceCategory;
    private String partsNumber;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "shop_id")
    private Shop shop;

    @OneToOne(mappedBy = "repair",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private Reservation reservation;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "feedback")
    private Feedback feedback;

    @OneToOne(mappedBy = "repair",
            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private Payment payment;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "service_id")
    private Repair repair;

    public Repair() {
    }

    public Repair(String serviceId, Time serviceTime, Date serviceDate, String serviceStatus, String serviceCategory, String partsNumber, Reservation reservation, Feedback feedback, Payment payment, Customer customer, Shop shop) {
        this.serviceId = serviceId;
        this.serviceTime = serviceTime;
        this.serviceDate = serviceDate;
        this.serviceStatus = serviceStatus;
        this.serviceCategory = serviceCategory;
        this.partsNumber = partsNumber;
        this.reservation = reservation;
        this.feedback = feedback;
        this.payment = payment;
        this.customer = customer;
        this.shop = shop;
    }

    public Repair(Time serviceTime, Date serviceDate, String serviceStatus, String serviceCategory, String partsNumber, Reservation reservation, Feedback feedback, Payment payment, Customer customer, Shop shop) {
        this.serviceTime = serviceTime;
        this.serviceDate = serviceDate;
        this.serviceStatus = serviceStatus;
        this.serviceCategory = serviceCategory;
        this.partsNumber = partsNumber;
        this.reservation = reservation;
        this.feedback = feedback;
        this.payment = payment;
        this.customer = customer;
        this.shop = shop;
    }

    @Override
    public String toString() {
        return "Repair{" +
                "serviceId='" + serviceId + '\'' +
                ", serviceTime=" + serviceTime +
                ", serviceDate=" + serviceDate +
                ", serviceStatus='" + serviceStatus + '\'' +
                ", serviceCategory='" + serviceCategory + '\'' +
                ", partsNumber='" + partsNumber + '\'' +
                ", reservation=" + reservation +
                ", feedback=" + feedback +
                ", payment=" + payment +
                ", customer=" + customer +
                ", shop=" + shop +
                '}';
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public Time getServiceTime() {
        return serviceTime;
    }

    public void setServiceTime(Time serviceTime) {
        this.serviceTime = serviceTime;
    }

    public Date getServiceDate() {
        return serviceDate;
    }

    public void setServiceDate(Date serviceDate) {
        this.serviceDate = serviceDate;
    }

    public String getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(String serviceStatus) {
        this.serviceStatus = serviceStatus;
    }

    public String getServiceCategory() {
        return serviceCategory;
    }

    public void setServiceCategory(String serviceCategory) {
        this.serviceCategory = serviceCategory;
    }

    public String getPartsNumber() {
        return partsNumber;
    }

    public void setPartsNumber(String partsNumber) {
        this.partsNumber = partsNumber;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public Feedback getFeedback() {
        return feedback;
    }

    public void setFeedback(Feedback feedback) {
        this.feedback = feedback;
    }

    public Payment getPayment() {
        return payment;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (serviceId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.serviceId = "SER" + randomDigits;
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
