package com.motorbike_reservation_system.backend.Authentication.Customer.Service.Impl;

import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerDTO;
import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.CustomerAddress;
import com.motorbike_reservation_system.backend.Authentication.Customer.Repo.CustomerAddressRepo;
import com.motorbike_reservation_system.backend.Authentication.Customer.Repo.CustomerRepo;
import com.motorbike_reservation_system.backend.Authentication.Customer.Response.CustomerLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Customer.Service.CustomerService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerImpl implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private CustomerAddressRepo customerAddressRepo;


    @Override
    public int addCustomer(CustomerDTO customerDTO) {
        Customer customer = Customer.builder()
                .customerId(customerDTO.getCustomerId())
                .customerName(customerDTO.getCustomerName())
                .customerEmail(customerDTO.getCustomerEmail())
                .customerPhoneNumber(customerDTO.getCustomerPhoneNumber())
                .customerUsername(customerDTO.getCustomerUsername())
                .customerPassword(this.passwordEncoder.encode(customerDTO.getCustomerPassword()))
                .activeStatus(Optional.ofNullable(customerDTO.getActiveStatus()).orElse("active"))
                .build();
        customerRepo.save(customer);
        return customer.getCustomerId();
    }


    public List<Customer> getCustomer() {
        return customerRepo.findAll();
    }
    @Override
    public CustomerLoginResponse loginCustomer(CustomerLoginDTO customerLoginDTO) {
        String msg="";
        Customer customer1 = customerRepo.findByCustomerEmail(customerLoginDTO.getCustomerEmail());
        if(customer1!= null){
            String password = customerLoginDTO.getCustomerPassword();
            String encodePassword = customer1.getCustomerPassword();
            Boolean isPasswordRight = passwordEncoder.matches(password, encodePassword);
            if (isPasswordRight){
                Optional<Customer> employee = customerRepo.findOneByCustomerEmailAndCustomerPassword(customerLoginDTO.getCustomerEmail(), encodePassword);
                if (employee.isPresent()){
                    return new CustomerLoginResponse(customer1.getCustomerId(), "Login Successfully",true );
                }
                else return new CustomerLoginResponse(0,"Login Failed",false);
            }
            else return new CustomerLoginResponse(0,"Password not Match", false);
        }
        else return new CustomerLoginResponse(0,"Email not Exists",false);
    }

    @Transactional
    public void updateActiveStatus(int customerId, String activeStatus) {
        customerRepo.updateActiveStatus(customerId, activeStatus);
    }


    public Customer getCustomerById(int customerId) {
        return customerRepo.findById(customerId).orElseThrow(() -> new RuntimeException("User not found"));
    }


    // Customer Address
    @Override
    public String addCustomerAddress(CustomerAddress customerAddress) {
        customerAddress = CustomerAddress.builder()
                .customerAddressId(customerAddress.getCustomerAddressId())
                .street(customerAddress.getStreet())
                .city(customerAddress.getCity())
                .State(customerAddress.getState())
                //.activeStatus(Optional.ofNullable(customerDTO.getActiveStatus()).orElse("active"))
                .build();
        customerAddressRepo.save(customerAddress);
        return customerAddress.getCustomerAddressId();
    }

    public List<CustomerAddress> getCustomerAddress(){
        return customerAddressRepo.findAll();
    }
}