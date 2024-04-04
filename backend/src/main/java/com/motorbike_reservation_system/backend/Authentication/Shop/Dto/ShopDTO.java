package com.motorbike_reservation_system.backend.Authentication.Shop.Dto;

import com.motorbike_reservation_system.backend.Feedback.Feedback;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;

import java.util.List;

public class ShopDTO {

    private int  ShopId;

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

    public ShopDTO(int ShopId, String shopName, String shopPassword, String ShopAddress, String ContactNumber, String TaxId, String Email, String SubscriptionPlan) {
        this.ShopId = ShopId;
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        this.ShopAddress = ShopAddress;
        this.ContactNumber = ContactNumber;
        this.TaxId = TaxId;
        this.Email = Email;
        this.SubscriptionPlan = SubscriptionPlan;
    }

    public ShopDTO(String shopName, String shopPassword, String ShopAddress, String ContactNumber, String TaxId, String Email, String SubscriptionPlan) {
        this.shopName = shopName;
        this.shopPassword = shopPassword;
        this.ShopAddress = ShopAddress;
        this.ContactNumber = ContactNumber;
        this.TaxId = TaxId;
        this.Email = Email;
        this.SubscriptionPlan = SubscriptionPlan;
    }

    public int getShopId() {
        return ShopId;
    }

    public void setShopId(int ShopId) {
        this.ShopId = ShopId;
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
        return ShopAddress;
    }

    public void setShopAddress(String ShopAddress) {
        this.ShopAddress = ShopAddress;
    }

    public String getContactNumber() {
        return ContactNumber;
    }

    public void setContactNumber(String ContactNumber) {
        this.ContactNumber = ContactNumber;
    }

    public String getTaxId() {
        return TaxId;
    }

    public void setTaxId(String TaxId) {
        this.TaxId = TaxId;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getSubscriptionPlan() {
        return SubscriptionPlan;
    }

    public void setSubscriptionPlan(String SubscriptionPlan) {
        this.SubscriptionPlan = SubscriptionPlan;
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
        return "ShopDTO{" +
                "ShopId=" + ShopId +
                ", shopName='" + shopName + '\'' +
                ", shopPassword='" + shopPassword + '\'' +
                ", ShopAddress='" + ShopAddress + '\'' +
                ", ContactNumber='" + ContactNumber + '\'' +
                ", TaxId='" + TaxId + '\'' +
                ", Email='" + Email + '\'' +
                ", SubscriptionPlan='" + SubscriptionPlan + '\'' +
                ", reservations=" + reservations +
                ", feedbacks=" + feedbacks +
                ", repairs=" + repairs +
                '}';
    }
}