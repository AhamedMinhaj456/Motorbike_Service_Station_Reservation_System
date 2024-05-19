package com.motorbike_reservation_system.backend.Authentication.Shop.Service.Impl;

import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopPasswordDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Authentication.Shop.Response.ShopLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Shop.Repo.ShopRepo;
import com.motorbike_reservation_system.backend.Authentication.Shop.Service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShopImpl implements ShopService {
    @Autowired
    private ShopRepo shopRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;



    public int addShop(ShopDTO shopDTO) {
       Shop shop = Shop.builder()
                .shopId(shopDTO.getShopId())
                .shopName(shopDTO.getShopName())
                .shopPassword(this.passwordEncoder.encode(shopDTO.getShopPassword()))
                .shopAddress(shopDTO.getShopAddress())
                .contactNumber(shopDTO.getContactNumber())
                .taxId(shopDTO.getTaxId())
                .email(shopDTO.getEmail())
                .subscriptionPlan(shopDTO.getSubscriptionPlan())
                .build();
        shopRepo.save(shop);
        return shop.getShopId();
    }

    public Shop savePassword(ShopPasswordDTO shopPasswordDTO) {
        Shop existingShop = shopRepo.findByShopId(shopPasswordDTO.getShopId());
        existingShop.setShopPassword(this.passwordEncoder.encode(shopPasswordDTO.getShopPassword()));
        return shopRepo.save(existingShop);
    }


    public List<Shop> getShop() {
        return shopRepo.findAll();
    }
    public List<Object[]> getShopDetails() {
        return shopRepo.findShopDetails();
    }
    @Override
    public ShopLoginResponse loginShop(ShopLoginDTO shopLoginDTO) {
        String msg="";
        Shop shop1 = shopRepo.findByEmail(shopLoginDTO.getEmail());
        if(shop1!= null){
            String password = shopLoginDTO.getShopPassword();
            String encodePassword = shop1.getShopPassword();
            Boolean isPasswordRight = passwordEncoder.matches(password, encodePassword);
            if (isPasswordRight){
                Optional<Shop> shop = shopRepo.findOneByEmailAndShopPassword(shopLoginDTO.getEmail(), encodePassword);
                if (shop.isPresent()){
                    return new ShopLoginResponse("Login Successfully",true );
                }
                else return new ShopLoginResponse("Login Failed",false);
            }
            else return new ShopLoginResponse("Password not Match", false);
        }
        else return new ShopLoginResponse("Email not Exists",false);
    }

    public List<Shop> searchUsers(String shopName, String shopAddress, String email) {
        return shopRepo.findByNameAddressEmail(shopName, shopAddress, email);
    }

    public List<Shop> searchUsers(String searchTerm) {
        return shopRepo.findByShopNameOrShopAddressOrEmail(searchTerm);
    }
}
