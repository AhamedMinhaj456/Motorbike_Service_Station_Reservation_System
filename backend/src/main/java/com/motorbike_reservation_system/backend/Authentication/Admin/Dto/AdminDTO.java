package com.motorbike_reservation_system.backend.Authentication.Admin.Dto;

public class AdminDTO {

    private int  adminId;
    private String adminName;
    private String adminPassword;
    private String adminRole;

    public AdminDTO() {
    }

    public AdminDTO(int adminId, String adminName, String adminPassword, String adminRole) {
        this.adminId = adminId;
        this.adminName = adminName;
        this.adminPassword = adminPassword;
        this.adminRole = adminRole;
    }

    public AdminDTO(String adminName, String adminPassword, String adminRole) {
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
        return "AdminDTO{" +
                "adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", adminPassword='" + adminPassword + '\'' +
                ", adminRole='" + adminRole + '\'' +
                '}';
    }
}

