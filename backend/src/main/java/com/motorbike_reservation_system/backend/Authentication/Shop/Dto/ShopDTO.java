package com.motorbike_reservation_system.backend.Authentication.Shop.Dto;

import com.motorbike_reservation_system.backend.Feedback.Feedback;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;

import java.util.List;

public class ShopDTO {

    private String  ShopId;

    private String shopName;
    private String shopPassword;

    private String ShopAddress;


    private String ContactNumber;
    private String TaxId;
    private String Email;
    private String SubscriptionPlan;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Repair> repairs;


    public ShopDTO() {
    }

    public ShopDTO(String  shopId, String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan, List<Reservation> reservations, List<Feedback> feedbacks, List<Repair> repairs) {
        ShopId = shopId;
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        ShopAddress = shopAddress;
        ContactNumber = contactNumber;
        TaxId = taxId;
        Email = email;
        SubscriptionPlan = subscriptionPlan;
        this.reservations = reservations;
        this.feedbacks = feedbacks;
        this.repairs = repairs;

    }

    public ShopDTO(String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan, List<Reservation> reservations, List<Feedback> feedbacks, List<Repair> repairs) {
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        ShopAddress = shopAddress;
        ContactNumber = contactNumber;
        TaxId = taxId;
        Email = email;
        SubscriptionPlan = subscriptionPlan;
        this.reservations = reservations;
        this.feedbacks = feedbacks;
        this.repairs = repairs;
    }

    public String  getShopId() {
        return ShopId;
    }

    public void setShopId(String  shopId) {
        ShopId = shopId;
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
        return ShopAddress;
    }

    public void setShopAddress(String shopAddress) {
        ShopAddress = shopAddress;
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String contactNumber) {
        ContactNumber = contactNumber;
    }

    public String getTaxId() {
        return TaxId;
    }

    public void setTaxId(String taxId) {
        TaxId = taxId;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getSubscriptionPlan() {
        return SubscriptionPlan;
    }

    public void setSubscriptionPlan(String subscriptionPlan) {
        SubscriptionPlan = subscriptionPlan;
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
                "ShopId=" + ShopId +
                ", ShopName='" + shopName + '\'' +
                ", ShopPassword='" + shopPassword + '\'' +
                ", ShopAddress='" + ShopAddress + '\'' +
                ", ContactNumber='" + ContactNumber + '\'' +
                ", TaxId='" + TaxId + '\'' +
                ", Email='" + Email + '\'' +
                ", SubscriptionPlan='" + SubscriptionPlan + '\'' +
                ", Reservations=" + reservations +
                ", Feedbacks=" + feedbacks +
                ", Repairs=" + repairs +
                '}';
    }

//    private int ShopId;
//    private String shopName;
//    private String shopPassword;
//    private String ShopAddress;
//    private String ContactNumber;
//    private String TaxId;
//    private String Email;
//    private String SubscriptionPlan;
//
//    public ShopDTO() {
//    }
//
//    public ShopDTO(int shopId, String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
//        ShopId = shopId;
//        shopName = shopName;
//        shopPassword = shopPassword;
//        ShopAddress = shopAddress;
//        ContactNumber = contactNumber;
//        TaxId = taxId;
//        Email = email;
//        SubscriptionPlan = subscriptionPlan;
//    }
//
//    public ShopDTO(String shopName, String shopPassword, String shopAddress, String contactNumber, String taxId, String email, String subscriptionPlan) {
//        shopName = shopName;
//        shopPassword = shopPassword;
//        ShopAddress = shopAddress;
//        ContactNumber = contactNumber;
//        TaxId = taxId;
//        Email = email;
//        SubscriptionPlan = subscriptionPlan;
//    }
//
//    @Override
//    public String toString() {
//        return "ShopDTO{" +
//                "ShopId=" + ShopId +
//                ", ShopName='" + shopName + '\'' +
//                ", ShopPassword='" + shopPassword + '\'' +
//                ", ShopAddress='" + ShopAddress + '\'' +
//                ", ContactNumber='" + ContactNumber + '\'' +
//                ", TaxId='" + TaxId + '\'' +
//                ", Email='" + Email + '\'' +
//                ", SubscriptionPlan='" + SubscriptionPlan + '\'' +
//                '}';
//    }
//
//    public int getShopId() {
//        return ShopId;
//    }
//
//    public void setShopId(int shopId) {
//        ShopId = shopId;
//    }
//
//    public String getShopName() {
//        return shopName;
//    }
//
//    public void setShopName(String shopName) {
//        shopName = shopName;
//    }
//
//    public String getShopPassword() {
//        return shopPassword;
//    }
//
//    public void setShopPassword(String shopPassword) {
//        shopPassword = shopPassword;
//    }
//
//    public String getShopAddress() {
//        return ShopAddress;
//    }
//
//    public void setShopAddress(String shopAddress) {
//        ShopAddress = shopAddress;
//    }
//
//    public String getContactNumber() {
//        return ContactNumber;
//    }
//
//    public void setContactNumber(String contactNumber) {
//        ContactNumber = contactNumber;
//    }
//
//    public String getTaxId() {
//        return TaxId;
//    }
//
//    public void setTaxId(String taxId) {
//        TaxId = taxId;
//    }
//
//    public String getEmail() {
//        return Email;
//    }
//
//    public void setEmail(String email) {
//        Email = email;
//    }
//
//    public String getSubscriptionPlan() {
//        return SubscriptionPlan;
//    }
//
//    public void setSubscriptionPlan(String subscriptionPlan) {
//        SubscriptionPlan = subscriptionPlan;
//    }

}