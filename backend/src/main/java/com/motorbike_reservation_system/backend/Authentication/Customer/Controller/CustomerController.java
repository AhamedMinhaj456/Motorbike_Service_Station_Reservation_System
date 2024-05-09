package com.motorbike_reservation_system.backend.Authentication.Customer.Controller;

import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerDTO;
import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerLoginDTO;

import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Customer.Response.CustomerLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Customer.Service.CustomerService;
import com.motorbike_reservation_system.backend.Authentication.Customer.Service.Impl.CustomerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @Autowired
    private CustomerImpl customerImpl;


    @PostMapping(path= "/save")
    public String addCustomer(@RequestBody CustomerDTO customerDTO){
        String id = customerService.addCustomer(customerDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginCustomer(@RequestBody CustomerLoginDTO customerLoginDTO){
        CustomerLoginResponse customerLoginResponse = customerService.loginCustomer(customerLoginDTO);
        return ResponseEntity.ok(customerLoginResponse);
    }

    @GetMapping("/getCustomer")
    public List<Customer> findAllCustomer() {
        return customerImpl.getCustomer();
    }
}