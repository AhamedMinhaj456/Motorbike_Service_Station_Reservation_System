package motorbike_reservation_system.admin_CRUD.Fault.Parts.FuelSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuelSystemService {

    @Autowired
    private FuelSystemRepo fuelSystemRepo;

    public FuelSystem saveFuelSystem(FuelSystem fuelSystem) {
        return fuelSystemRepo.save(fuelSystem);
    }

    public FuelSystem getFuelSystem(String fuelSystem) {
        return fuelSystemRepo.findByFuelSystem(fuelSystem);
    }
    public List<FuelSystem> getAllFuelSystem() {
        return fuelSystemRepo.findAll();
    }

    public String deleteFuelSystem(String fuelSystemId){
        fuelSystemRepo.deleteById(fuelSystemId);
        return "product removed !! " + fuelSystemId;
    }

    public FuelSystem updateFuelSystem(FuelSystem fuelSystem) {
        FuelSystem existingFuelSystem = fuelSystemRepo.findByFuelSystem(fuelSystem.getFuelSystem());
        existingFuelSystem.setFuelSystem(fuelSystem.getFuelSystem());
        return fuelSystemRepo.save(fuelSystem);
    }

}





