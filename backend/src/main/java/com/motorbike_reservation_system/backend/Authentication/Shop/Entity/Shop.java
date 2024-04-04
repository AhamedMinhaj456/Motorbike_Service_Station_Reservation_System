package com.motorbike_reservation_system.backend.Authentication.Shop.Entity;

import com.motorbike_reservation_system.backend.Feedback.Feedback;
import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name="shop")
public class Shop {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "shopId", length = 255)
    private int shopId;
//    //@Column(name = "employeeName", length = 255)
    private String shopName;
    private String shopPassword;
//   // @Column(name = "email", length = 255)
    private String shopAddress;
//    ;
//    //@Column(name = "password", length = 255)
//
    private String contactNumber;
    private String taxId;
    private String email;
    private String subscriptionPlan;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Repair> repairs;


    public Shop() {
    }

    public Shop(int shopId, String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
        this.shopId = shopId;
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        this.shopAddress = shopAddress;
        this.contactNumber = contactNumber;
        this.taxId = taxId;
        this.email = email;
        this.subscriptionPlan = subscriptionPlan;
    }

    public Shop(String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        this.shopAddress = shopAddress;
        this.contactNumber = contactNumber;
        this.taxId = taxId;
        this.email = email;
        this.subscriptionPlan = subscriptionPlan;
    }

    public int getShopId() {
        return shopId;
    }

    public void setShopId(int shopId) {
        this.shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopPassword() {
        return shopPassword;
    }

    public void setShopPassword(String shopPassword) {
        this.shopPassword = shopPassword;
    }

    public String getShopAddress() {
        return shopAddress;
    }

    public void setShopAddress(String shopAddress) {
        this.shopAddress = shopAddress;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getTaxId() {
        return taxId;
    }

    public void setTaxId(String taxId) {
        this.taxId = taxId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubscriptionPlan() {
        return subscriptionPlan;
    }

    public void setSubscriptionPlan(String subscriptionPlan) {
        this.subscriptionPlan = subscriptionPlan;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<Feedback> getFeedbacks() {
        return feedbacks;
    }

    public void setFeedbacks(List<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
    }

    public List<Repair> getRepairs() {
        return repairs;
    }

    public void setRepairs(List<Repair> repairs) {
        this.repairs = repairs;
    }

    @Override
    public String toString() {
        return "Shop{" +
                "shopId=" + shopId +
                ", shopName='" + shopName + '\'' +
                ", shopPassword='" + shopPassword + '\'' +
                ", shopAddress='" + shopAddress + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", taxId='" + taxId + '\'' +
                ", email='" + email + '\'' +
                ", subscriptionPlan='" + subscriptionPlan + '\'' +
                ", reservations=" + reservations +
                ", feedbacks=" + feedbacks +
                ", repairs=" + repairs +
                '}';
    }
}