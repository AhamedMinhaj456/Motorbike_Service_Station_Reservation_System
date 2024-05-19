package com.motorbike_reservation_system.backend.Reservation;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation, String> {

    Reservation findByReservationId(String reservationId);
}
