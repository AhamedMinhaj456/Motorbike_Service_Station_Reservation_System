package com.motorbike_reservation_system.backend.Authentication.Customer.Service.Impl;

import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerDTO;
import com.motorbike_reservation_system.backend.Authentication.Customer.Dto.CustomerLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Customer.Entity.Customer;
import com.motorbike_reservation_system.backend.Authentication.Customer.Repo.CustomerRepo;
import com.motorbike_reservation_system.backend.Authentication.Customer.Response.CustomerLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Customer.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerImpl implements CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addCustomer(CustomerDTO customerDTO) {

        Customer customer =new Customer(
                customerDTO.getCustomerId(),
                customerDTO.getCustomerName(),
                customerDTO.getCustomerEmail(),
                customerDTO.getCustomerUsername(),
                this.passwordEncoder.encode(customerDTO.getCustomerPassword()),
                customerDTO.getPhoneNumber()



        );
        customerRepo.save(customer);
        return customer.getCustomerName();
        //       return "saved Successfully";
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
                    return new CustomerLoginResponse("Login Successfully",true );
                }
                else return new CustomerLoginResponse("Login Failed",false);
            }
            else return new CustomerLoginResponse("Password not Match", false);
        }
        else return new CustomerLoginResponse("Email not Exists",false);
    }
}