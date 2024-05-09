package com.motorbike_reservation_system.backend.Authentication.Shop.Dto;


import lombok.Builder;
import lombok.Getter;

import java.util.List;
@Builder
@Getter
public class ShopDTO {

    private int  shopId;
    private String shopName;
    private String shopPassword;
    private String shopAddress;
    private String contactNumber;
    private String taxId;
    private String email;
    private String subscriptionPlan;

}