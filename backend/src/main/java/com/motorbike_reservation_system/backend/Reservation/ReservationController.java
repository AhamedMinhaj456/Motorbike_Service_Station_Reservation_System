package com.motorbike_reservation_system.backend.Reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/addReservation")
    public Reservation addReservation(@RequestBody ReservationDTO reservationDTO) {
        return reservationService.addReservation(reservationDTO);
    }


    @GetMapping("/getReservation")
    public List<Reservation> findAllReservation() {
        return reservationService.getReservation();
    }

    @GetMapping("/reservationById/{reservationId}")
    public Reservation findReservationByReservationId(@PathVariable String reservationId) {
        return reservationService.getReservationByReservationId(reservationId);
    }



//    @PutMapping("/updateReservation")
//    public Reservation updateReservation(@RequestBody Reservation reservation) {
//        return reservationService.updateReservation(reservation);
//    }

    @DeleteMapping("/deleteReservation/{reservationId}")
    public java.lang.String deleteReservation(@PathVariable java.lang.String reservationId) {
        return reservationService.deleteReservation(reservationId);
    }

//    @GetMapping("/dropdown")
//    public String add(Model model){
//        List<Reservation> reservationList = reservationService.listAll();
//        model.addAttribute("reservationList", reservationList);
//        model.addAttribute("reservation", new Reservation());
//        return "dropdown";
//    }

    @GetMapping("/dropdown")
    public java.lang.String add(Model model) {
        List<Reservation> reservationList = reservationService.listAll();
        model.addAttribute("reservationList", reservationList);
        model.addAttribute("reservation", new Reservation());
        return "dropdown";
    }


}
