package com.motorbike_reservation_system.backend.payment;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Motorbike.MotorbikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/addPayment")
    public Payment addPayment(@RequestBody Payment payment) {
        return paymentService.savePayment(payment);
    }

    @GetMapping("/payments")
    public List<Payment> findAllPayments() {
        return paymentService.getPayment();
    }

    @GetMapping("/paymentById/{paymentId}")
    public Payment findPaymentByPaymentId(@PathVariable String paymentId) {
        return paymentService.getPaymentByPaymentId(paymentId);
    }

    @PutMapping("/updatePayment")
    public Payment updatePayment(@RequestBody Payment payment) {
        return paymentService.updatePayment(payment);
    }

    @DeleteMapping("/deletePayment/{paymentId}")
    public String deletePayment(@PathVariable String paymentId) {
        return paymentService.deletePayment(paymentId);
    }



}
