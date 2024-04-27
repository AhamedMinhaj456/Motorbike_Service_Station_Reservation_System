package motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/brakingSystem")
public class BrakingSystemController {

    @Autowired
    private BrakingSystemService brakingSystemService;


    @PostMapping("/addBrakingSystem")
    public BrakingSystem addBrakingSystem(@RequestBody BrakingSystem brakingSystem) {
        return brakingSystemService.saveBreakingSystem(brakingSystem);
    }

    @GetMapping("/brakeSystem")
    public List<BrakingSystem> findAllBrakingSystem() {
        return brakingSystemService.getBreakingSystem();
    }

    @GetMapping("/brakingSystemById/{breakingSystemId}")
    public BrakingSystem findBrakingSystemByBrakingSystemId(@PathVariable String breakingSystemId) {
        return brakingSystemService.getBreakingSystem(breakingSystemId);
    }

    @PutMapping("/updateBrakingSystem")
    public BrakingSystem updateBrakingSystem(@RequestBody BrakingSystem brakingSystem) {
        return brakingSystemService.updateBrakingSystem(brakingSystem);
    }

    @DeleteMapping("/deleteBrakingSystem/{breakingSystemId}")
    public String deleteBakingSystem(@PathVariable String breakingSystemId) {
        return brakingSystemService.deleteBrakingSystem(breakingSystemId);
    }
}