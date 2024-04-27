package motorbike_reservation_system.admin_CRUD.Fault.Parts.WheelsAndTires;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WheelsTiresService {


    @Autowired
    private WheelsTiresRepo wheelsTiresRepo;

    public WheelsTires saveWheelsTires(WheelsTires wheelsTires) {
        return wheelsTiresRepo.save(wheelsTires);
    }

    public List<WheelsTires> getWheelsTires() {
        return wheelsTiresRepo.findAll();
    }

    public WheelsTires getWheelsTires(String wheelsTiresId) {
        return wheelsTiresRepo.findById(wheelsTiresId).orElse(null);
    }

    public String deleteWheelsTires(String wheelsTiresId){
        wheelsTiresRepo.deleteById(wheelsTiresId);
        return "product removed !! " + wheelsTiresId;
    }

    public WheelsTires updateWheelsTires(WheelsTires wheelsTires) {
        WheelsTires existingWheelsTires = wheelsTiresRepo.findByWheelsTires(wheelsTires.getWheelsTires());
        existingWheelsTires.setWheelsTires(wheelsTires.getWheelsTires());
        return wheelsTiresRepo.save(wheelsTires);
    }

    }
