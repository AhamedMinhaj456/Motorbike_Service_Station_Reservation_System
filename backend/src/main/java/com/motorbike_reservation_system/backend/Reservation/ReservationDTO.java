package com.motorbike_reservation_system.backend.Reservation;

import lombok.Builder;
import lombok.Getter;

import java.sql.Time;
import java.util.Date;

@Builder
@Getter
public class ReservationDTO {

    private String reservationId;
    private String motorbikeNumber;
    private Date reservationDate;
    private Time reservationTime;
    private String advancePayment;
    private int shopId;
    private int customerId;
    private String  serviceId;
    private String faultId;
}
