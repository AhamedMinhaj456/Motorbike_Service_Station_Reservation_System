package com.motorbike_reservation_system.backend.Authentication.Admin.Service.Impl;

import com.motorbike_reservation_system.backend.Authentication.Admin.Dto.AdminDTO;
import com.motorbike_reservation_system.backend.Authentication.Admin.Dto.AdminLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Admin.Entity.Admin;
import com.motorbike_reservation_system.backend.Authentication.Admin.Repo.AdminRepo;
import com.motorbike_reservation_system.backend.Authentication.Admin.Response.AdminLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Admin.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminIMPL implements AdminService {
    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addAdmin(AdminDTO adminDTO) {

        Admin admin =new Admin(
                adminDTO.getAdminId(),
                adminDTO.getAdminName(),
                this.passwordEncoder.encode(adminDTO.getAdminPassword()),
                adminDTO.getAdminRole()

        );
        adminRepo.save(admin);
        return admin.getAdminName() ;
        //       return "saved Successfully";
    }

    @Override
    public AdminLoginResponse loginAdmin(AdminLoginDTO adminLoginDTO) {
        String msg="";
        Admin admin1 = adminRepo.findByAdminName(adminLoginDTO.getAdminName());
        if(admin1!= null){
            String password = adminLoginDTO.getAdminPassword();
            String encodePassword = admin1.getAdminPassword();
            boolean isPasswordRight = passwordEncoder.matches(password, encodePassword);
            if (isPasswordRight){
                Optional<Admin> admin = adminRepo.findOneByAdminNameAndAdminPassword(adminLoginDTO.getAdminName(), encodePassword);
                if (admin.isPresent()){
                    return new AdminLoginResponse("Login Successfully",true );
                }
                else return new AdminLoginResponse("Login Failed",false);
            }
            else return new AdminLoginResponse("Password not Match", false);
        }
        else return new AdminLoginResponse("Email not Exists",false);
    }
}
