package com.motorbike_reservation_system.backend.Authentication.Customer.Dto;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDTO {


    private int customerId;
    private java.lang.String customerName;
    private java.lang.String customerEmail;
    private java.lang.String customerPhoneNumber;
    private java.lang.String customerUsername;
    private java.lang.String customerPassword;

}
