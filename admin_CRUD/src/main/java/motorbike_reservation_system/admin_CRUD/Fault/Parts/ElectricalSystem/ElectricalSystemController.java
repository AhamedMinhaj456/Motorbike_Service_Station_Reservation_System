package motorbike_reservation_system.admin_CRUD.Fault.Parts.ElectricalSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/electricalSystem")
public class ElectricalSystemController {


    @Autowired
    private ElectricalSystemService electricalSystemService;


    @PostMapping("/addElectricalSystem")
    public ElectricalSystem addElectricalSystem(@RequestBody ElectricalSystem electricalSystem) {
        return electricalSystemService.saveElectricalSystem(electricalSystem);
    }

    @GetMapping("/electricalSystem")
    public List<ElectricalSystem> findAllElectricalSystem() {
        return electricalSystemService.getElectricalSystem();
    }

    @GetMapping("/electricalSystemById/{electricalSystemId}")
    public ElectricalSystem findElectricalSystemByElectricalSystemId(@PathVariable String electricalSystemId) {
        return electricalSystemService.getElectricalSystem(electricalSystemId);
    }

    @PutMapping("/updateElectricalSystem")
    public ElectricalSystem updateElectricalSystem(@RequestBody ElectricalSystem electricalSystem) {
        return electricalSystemService.updateElectricalSystem(electricalSystem);
    }

    @DeleteMapping("/deleteElectricalSystem/{electricalSystemId}")
    public String deleteElectricalSystem(@PathVariable String electricalSystemId) {
        return electricalSystemService.deleteElectricalSystem(electricalSystemId);
    }



}
