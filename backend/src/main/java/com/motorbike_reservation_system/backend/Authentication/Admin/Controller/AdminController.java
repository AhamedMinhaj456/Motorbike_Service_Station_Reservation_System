package com.motorbike_reservation_system.backend.Authentication.Admin.Controller;

import com.motorbike_reservation_system.backend.Authentication.Admin.Dto.AdminDTO;
import com.motorbike_reservation_system.backend.Authentication.Admin.Dto.AdminLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Admin.Response.AdminLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Admin.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @PostMapping(path= "/save")
    public String saveAdmin(@RequestBody AdminDTO adminDTO){
        return adminService.addAdmin(adminDTO);
    }

    @GetMapping(path = "/login")
    public ResponseEntity<?> loginAdmin(@RequestBody AdminLoginDTO adminLoginDTO){
        AdminLoginResponse adminLoginResponse = adminService.loginAdmin(adminLoginDTO);
        return ResponseEntity.ok(adminLoginResponse);
    }
}
