package com.motorbike_reservation_system.backend.Reservation;

import lombok.Builder;
import lombok.Getter;

import java.sql.Date;
import java.sql.Time;



@Builder
@Getter
public class ReservationDetailsDTO {
    
    private String reservationId;
    private String motorbikeNumber;
    private Date reservationDate;
    private Time reservationTime;
    private String advancePayment;
    private String customerName;
    private String shopName;
}
