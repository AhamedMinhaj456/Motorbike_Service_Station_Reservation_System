package com.motorbike_reservation_system.backend.Authentication.Customer.Dto;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;

import java.util.List;

public class CustomerDTO {


    private String customerId;
    private String customerName;
    private String customerEmail;
    private String customerUsername;
    private String customerPassword;
    private String phoneNumber;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Motorbike> motorbikes;

    @OneToMany(mappedBy = "reservation", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "repair_service", cascade = CascadeType.ALL)
    private List<Repair> repairs;

    public CustomerDTO() {
    }

    public CustomerDTO(String customerId, String customerName, String customerEmail, String customerUsername, String customerPassword, String phoneNumber, List<Motorbike> motorbikes, List<Reservation> reservations, List<Repair> repairs) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerName = customerUsername;
        this.customerPassword = customerPassword;
        this.phoneNumber = phoneNumber;
        this.motorbikes = motorbikes;
        this.reservations = reservations;
        this.repairs = repairs;
    }

    public CustomerDTO(String customerName, String customerEmail, String customerPassword, String phoneNumber, List<Motorbike> motorbikes, List<Reservation> reservations, List<Repair> repairs) {
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerName = customerUsername;
        this.customerPassword = customerPassword;
        this.phoneNumber = phoneNumber;
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
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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
                ", phoneNumber='" + phoneNumber + '\'' +
                ", motorbikes=" + motorbikes +
                ", reservations=" + reservations +
                ", repairs=" + repairs +
                '}';
    }



//    private int customerId;
//    private String customerName;
//    private String customerEmail;
//    private String customerUsername;
//    private String customerPassword;
//    private String phoneNumber;
//
//    public CustomerDTO() {
//    }
//
//    public CustomerDTO(int customerId, String customerName, String customerEmail,String customerUsername, String customerPassword, String phoneNumber) {
//        this.customerId = customerId;
//        this.customerName = customerName;
//        this.customerEmail = customerEmail;
//        this.customerName = customerUsername;
//        this.customerPassword = customerPassword;
//        this.phoneNumber = phoneNumber;
//    }
//
//    public CustomerDTO(String customerName, String customerEmail, String customerUsername, String customerPassword, String phoneNumber) {
//        this.customerName = customerName;
//        this.customerEmail = customerEmail;
//        this.customerName = customerUsername;
//        this.customerPassword = customerPassword;
//        this.phoneNumber = phoneNumber;
//    }
//
//    @Override
//    public String toString() {
//        return "CustomerDTO{" +
//                "customerId=" + customerId +
//                ", customerName='" + customerName + '\'' +
//                ", customerEmail='" + customerEmail + '\'' +
//                ", customerName='" + customerUsername + '\'' +
//                ", customerPassword='" + customerPassword + '\'' +
//                ", phoneNumber='" + phoneNumber + '\'' +
//                '}';
//    }
//
//    public int getCustomerId() {
//        return customerId;
//    }
//
//    public void setCustomerId(int customerId) {
//        this.customerId = customerId;
//    }
//
//    public String getCustomerName() {
//        return customerName;
//    }
//
//    public void setCustomerName(String customerName) {
//        this.customerName = customerName;
//    }
//
//    public String getCustomerEmail() {
//        return customerEmail;
//    }
//
//    public void setCustomerEmail(String customerEmail) {
//        this.customerEmail = customerEmail;
//    }
//
//    public String getCustomerUsername() {
//        return customerUsername;
//    }
//
//    public void setCustomerUsername(String customerUsername) {
//        this.customerUsername = customerUsername;
//    }
//
//    public String getCustomerPassword() {
//        return customerPassword;
//    }
//
//    public void setCustomerPassword(String customerPassword) {
//        this.customerPassword = customerPassword;
//    }
//
//    public String getPhoneNumber() {
//        return phoneNumber;
//    }
//
//    public void setPhoneNumber(String phoneNumber) {
//        this.phoneNumber = phoneNumber;
//    }
}
