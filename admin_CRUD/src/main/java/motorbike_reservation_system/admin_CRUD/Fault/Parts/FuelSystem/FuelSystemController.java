package motorbike_reservation_system.admin_CRUD.Fault.Parts.FuelSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/fuelSystem")
public class FuelSystemController {

    @Autowired
    private FuelSystemService fuelSystemService;

    @PostMapping("/addFuelSystem")
    public FuelSystem addFuelSystem(@RequestBody FuelSystem fuelSystem) {
        return fuelSystemService.saveFuelSystem(fuelSystem);
    }

    @GetMapping("/fuelSystem")
    public List<FuelSystem> findAllFuelSystem() {
        return fuelSystemService.getAllFuelSystem();
    }

    @GetMapping("/fuelSystemById/{fuelSystemId}")
    public FuelSystem findFuelSystemByFuelSystemId(@PathVariable String fuelSystemId) {
        return fuelSystemService.getFuelSystem(fuelSystemId);
    }

    @PutMapping("/updateFuelSystem")
    public FuelSystem updateFuelSystem(@RequestBody FuelSystem fuelSystem) {
        return fuelSystemService.updateFuelSystem(fuelSystem);
    }

    @DeleteMapping("/deleteFuelSystem/{fuelSystemId}")
    public String deleteFuelSystem(@PathVariable String fuelSystemId) {
        return fuelSystemService.deleteFuelSystem(fuelSystemId);
    }

}