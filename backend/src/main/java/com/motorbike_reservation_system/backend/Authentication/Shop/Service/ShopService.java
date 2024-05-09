package com.motorbike_reservation_system.backend.Authentication.Shop.Service;

import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Dto.ShopLoginDTO;
import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Authentication.Shop.Response.ShopLoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface ShopService {

    Shop addShop(ShopDTO shopDTO);

    ShopLoginResponse loginShop(ShopLoginDTO shopLoginDTO);
}
