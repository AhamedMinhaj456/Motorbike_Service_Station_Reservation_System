package com.motorbike_reservation_system.backend.Authentication.Shop.Controller;

import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Authentication.Shop.Response.ShopLoginResponse;
import com.motorbike_reservation_system.backend.Authentication.Shop.Service.Impl.ShopImpl;
import com.motorbike_reservation_system.backend.Authentication.Shop.Service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/shop")
public class ShopController {
    @Autowired
    private ShopService shopService;

    @Autowired
    private ShopImpl shopImpl;


    @PostMapping(path= "/save")
    public String saveShop(@RequestBody ShopDTO shopDTO){
        String id = shopService.addShop(shopDTO);
        return id;
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginShop(@RequestBody ShopLoginDTO shopLoginDTO){
        ShopLoginResponse shopLoginResponse = shopService.loginShop(shopLoginDTO);
        return ResponseEntity.ok(shopLoginResponse);
    }

    @GetMapping("/getShop")
    public List<Shop> findAllShop() {
        return shopImpl.getShop();
    }
}
