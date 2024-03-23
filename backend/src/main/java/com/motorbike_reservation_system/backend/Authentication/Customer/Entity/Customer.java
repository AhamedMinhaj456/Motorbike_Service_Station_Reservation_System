package com.motorbike_reservation_system.backend.Authentication.Customer.Entity;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String customerId;
    private String customerName;
    private String customerEmail;
    private String customerUsername;
    private String customerPassword;
    private String customerPhoneNumber;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Motorbike> motorbikes;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Repair> repairs;

    public Customer() {
    }

    public Customer(String customerId, String customerName, String customerEmail, String customerUsername, String customerPassword, String phoneNumber, List<Motorbike> motorbikes, List<Reservation> reservations, List<Repair> repairs) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerName = customerUsername;
        this.customerPassword = customerPassword;
        this.customerPhoneNumber = phoneNumber;
        this.motorbikes = motorbikes;
        this.reservations = reservations;
        this.repairs = repairs;
    }

    public Customer(String customerName, String customerEmail, String customerPassword, String phoneNumber, List<Motorbike> motorbikes, List<Reservation> reservations, List<Repair> repairs) {
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerName = customerUsername;
        this.customerPassword = customerPassword;
        this.customerPhoneNumber = phoneNumber;
        this.motorbikes = motorbikes;
        this.reservations = reservations;
        this.repairs = repairs;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerUsername() {
        return customerUsername;
    }

    public void setCustomerUsername(String customerUsername) {
        this.customerUsername = customerUsername;
    }

    public String getCustomerPassword() {
        return customerPassword;
    }

    public void setCustomerPassword(String customerPassword) {
        this.customerPassword = customerPassword;
    }

    public String getPhoneNumber() {
        return customerPhoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.customerPhoneNumber = phoneNumber;
    }

    public List<Motorbike> getMotorbikes() {
        return motorbikes;
    }

    public void setMotorbikes(List<Motorbike> motorbikes) {
        this.motorbikes = motorbikes;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<Repair> getRepairs() {
        return repairs;
    }

    public void setRepairs(List<Repair> repairs) {
        this.repairs = repairs;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId=" + customerId +
                ", customerName='" + customerName + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerUsername='" + customerUsername + '\'' +
                ", customerPassword='" + customerPassword + '\'' +
                ", phoneNumber='" + customerPhoneNumber + '\'' +
                ", motorbikes=" + motorbikes +
                ", reservations=" + reservations +
                ", repairs=" + repairs +
                '}';
    }



}