package com.motorbike_reservation_system.backend.Authentication.Admin.Entity;

import jakarta.persistence.*;

@Entity
@Table//(name="admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int adminId;
    //@Column(name="adminName",length = 55)
    private String adminName;
    //@Column(name="password",length = 55)
    private String adminPassword;
    //@Column(name="AdminRole",length = 55)
    private String adminRole;

    public Admin() {
    }

    public Admin(int adminId, String adminName, String adminPassword, String adminRole) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        this.adminRole = adminRole;
    }

    public Admin(String adminName, String adminPassword, String adminRole) {
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        this.adminRole = adminRole;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

    public void setAdminPassword(String adminPassword) {
        this.adminPassword = adminPassword;
    }

    public String getAdminRole() {
        return adminRole;
    }

    public void setAdminRole(String adminRole) {
        this.adminRole = adminRole;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", adminRole='" + adminRole + '\'' +
                '}';
    }
}
