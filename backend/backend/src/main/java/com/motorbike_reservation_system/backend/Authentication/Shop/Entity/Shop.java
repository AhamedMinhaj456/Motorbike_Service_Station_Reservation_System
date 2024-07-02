package com.motorbike_reservation_system.backend.Authentication.Shop.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.motorbike_reservation_system.backend.Feedback.Feedback;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
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
    private String activeStatus;
    private String approvedStatus;

    @JsonIgnore
    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Reservation> reservations;

    @JsonIgnore
    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Feedback> feedbacks;

    @JsonIgnore
    @OneToMany(mappedBy = "shop", cascade = CascadeType.ALL)
    private List<Repair> repairs;


}