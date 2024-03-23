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
    private String shopId;
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

    public Shop(String  shopId, String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan, List<Reservation> reservations, List<Feedback> feedbacks, List<Repair> repairs) {
        shopId = shopId;
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        shopAddress = shopAddress;
        contactNumber = contactNumber;
        taxId = taxId;
        email = email;
        subscriptionPlan = subscriptionPlan;
        this.reservations = reservations;
        this.feedbacks = feedbacks;
        this.repairs = repairs;

    }

    public Shop(String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan, List<Reservation> reservations, List<Feedback> feedbacks, List<Repair> repairs) {
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        shopAddress = shopAddress;
        contactNumber = contactNumber;
        taxId = taxId;
        email = email;
        subscriptionPlan = subscriptionPlan;
        this.reservations = reservations;
        this.feedbacks = feedbacks;
        this.repairs = repairs;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        shopName = shopName;
    }

    public String getShopPassword() {
        return shopPassword;
    }

    public void setShopPassword(String shopPassword) {
        shopPassword = shopPassword;
    }

    public String getShopAddress() {
        return shopAddress;
    }

    public void setShopAddress(String shopAddress) {
        shopAddress = shopAddress;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        contactNumber = contactNumber;
    }

    public String getTaxId() {
        return taxId;
    }

    public void setTaxId(String taxId) {
        taxId = taxId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        email = email;
    }

    public String getSubscriptionPlan() {
        return subscriptionPlan;
    }

    public void setSubscriptionPlan(String subscriptionPlan) {
        subscriptionPlan = subscriptionPlan;
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
                "ShopId=" + shopId +
                ", ShopName='" + shopName + '\'' +
                ", ShopPassword='" + shopPassword + '\'' +
                ", ShopAddress='" + shopAddress + '\'' +
                ", ContactNumber='" + contactNumber + '\'' +
                ", TaxId='" + taxId + '\'' +
                ", Email='" + email + '\'' +
                ", SubscriptionPlan='" + subscriptionPlan + '\'' +
                ", Reservations=" + reservations +
                ", Feedbacks=" + feedbacks +
                ", Repairs=" + repairs +
                '}';
    }
}