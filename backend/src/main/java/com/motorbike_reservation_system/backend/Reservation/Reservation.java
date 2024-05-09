package com.motorbike_reservation_system.backend.Reservation;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Fault_Management.Fault;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;
import java.util.Date;
import java.util.Random;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "reservation")
public class Reservation {
    @Id
    private String reservationId;
    private String motorbikeNumber;
    private Date reservationDate;
    private Time reservationTime;
    private String advancePayment;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "shop_id")
    @JsonIgnore
    private Shop shop;

    @ManyToOne(cascade = {CascadeType.DETACH, CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "customer_id")
    @JsonIgnore
    private Customer customer;



//    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name = "service_id")
//    private Repair repair;

//    @OneToOne(mappedBy = "fault",
//            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    private Fault fault;

//    @OneToOne(mappedBy = "reservation",
//    cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    @JoinColumn(name = "service_id")
//    private Repair repair;

    @OneToOne(mappedBy = "reservation")
    private Repair repair;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fault_id", referencedColumnName = "faultId")
    private Fault fault;



//    @OneToOne(mappedBy = "reservation",
//    cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    @JoinColumn(name = "fault_id")
//    private Fault fault;


    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (reservationId == null) {
            // Generate a random 6-digit number
            java.lang.String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.reservationId = "Res" + randomDigits;
        }
    }

    private java.lang.String generateRandomDigits(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
}
