package com.motorbike_reservation_system.backend.Reservation;

import com.motorbike_reservation_system.backend.Authentication.Customer.Repo.CustomerRepo;
import com.motorbike_reservation_system.backend.Authentication.Shop.Repo.ShopRepo;
import com.motorbike_reservation_system.backend.Fault_Management.Fault;
import com.motorbike_reservation_system.backend.Fault_Management.FaultRepository;
import com.motorbike_reservation_system.backend.Repair_Service.RepairRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepo reservationRepo;
    @Autowired
    private ShopRepo shopRepo;
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private RepairRepo repairRepo;
    @Autowired
    private FaultRepository faultRepo;



    @Autowired
    public ReservationService(ReservationRepo reservationRepo) {
        this.reservationRepo = reservationRepo;
    }
    public Reservation saveReservation(Reservation reservation) {
        return reservationRepo.save(reservation);
    }

    public List<Reservation> saveReservation(List<Reservation> reservationList) {
        return reservationRepo.saveAll(reservationList);
    }

    public List<Reservation> getReservation() {
        return reservationRepo.findAll();
    }

    public Reservation getReservationByReservationId(java.lang.String reservationId) {
        return reservationRepo.findByReservationId(reservationId);
        //.orElse(null);
    }



    public java.lang.String deleteReservation(java.lang.String reservationId) {
        reservationRepo.deleteById(reservationId);
        return "Reservation removed !! " + reservationId;
    }

    public List<Reservation> listAll() {
        return reservationRepo.findAll();
    }

//    public Reservation updateReservation(Reservation product) {
//        Reservation existingProduct = reservationRepo.findById(product.getId()).orElse(null);
//        existingProduct.setName(product.getName());
//        existingProduct.setQuantity(product.getQuantity());
//        existingProduct.setPrice(product.getPrice());
//        return reservationRepo.save(existingProduct);
//    }



    public Reservation addReservation(ReservationDTO reservationDTO) {

        Reservation reservation = Reservation.builder()
                .motorbikeNumber(reservationDTO.getMotorbikeNumber())
                .reservationDate(reservationDTO.getReservationDate())
                .reservationTime(reservationDTO.getReservationTime())
                .advancePayment(reservationDTO.getAdvancePayment())
                .customer(customerRepo.findByCustomerId(reservationDTO.getCustomerId()))
                .shop(shopRepo.findByShopId(reservationDTO.getShopId()))
                .repair(repairRepo.findByServiceId(reservationDTO.getServiceId()))
                .fault(faultRepo.findByFaultId(reservationDTO.getFaultId()))
                .build();
        return reservationRepo.save(reservation);
    }

}
