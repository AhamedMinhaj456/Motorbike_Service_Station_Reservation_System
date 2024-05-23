package com.motorbike_reservation_system.backend.Authentication.Customer.Controller;

import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerDTO;
import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerLoginDTO;

import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.CustomerAddress;
import com.motorbike_reservation_system.backend.Authentication.Customer.Response.CustomerLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Customer.Service.CustomerService;
import com.motorbike_reservation_system.backend.Authentication.Customer.Service.Impl.CustomerImpl;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
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
    public int addCustomer(@RequestBody CustomerDTO customerDTO){
        int customerId = customerService.addCustomer(customerDTO);
        return customerId;
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

    @PutMapping("/{customerId}/active-status")
    public void updateActiveStatus(@PathVariable int customerId, @RequestParam String activeStatus) {
        customerImpl.updateActiveStatus(customerId, activeStatus);
    }

    @GetMapping("/{customerId}")
    public Customer getCustomerById(@PathVariable int customerId) {
        return customerImpl.getCustomerById(customerId);
    }

    @PostMapping(path= "/addAddress")
    public String addCustomerAddress(@RequestBody CustomerAddress customerAddress){
        String customerAddressId = customerService.addCustomerAddress(customerAddress);
        return customerAddressId;
    }
    @GetMapping("getCustomerAddress")
    public List<CustomerAddress> getAllCustomerAddress(){
        return customerImpl.getCustomerAddress();
    }
}