package com.motorbike_reservation_system.backend.Authentication.Admin.Entity;

import jakarta.persistence.*;

@Entity
@Table//(name="admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //@Column(name="AdminId",length = 55)
    private String adminId;
    //@Column(name="adminName",length = 55)
    private String adminName;
    //@Column(name="password",length = 55)
    private String adminPassword;
    //@Column(name="AdminRole",length = 55)
    private String adminRole;

    public Admin() {
    }

    public Admin(String adminId, String adminName, String password, String adminRole) {
        adminId = adminId;
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        adminRole = adminRole;
    }

    public Admin(String adminName, String password, String adminRole) {
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        adminRole = adminRole;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getPassword() {
        return adminPassword;
    }

    public void setPassword(String password) {
        this.adminPassword = adminPassword;
    }

    public String getAdminRole() {
        return adminRole;
    }

    public void setAdminRole(String adminRole) {
        adminRole = adminRole;
    }
}
