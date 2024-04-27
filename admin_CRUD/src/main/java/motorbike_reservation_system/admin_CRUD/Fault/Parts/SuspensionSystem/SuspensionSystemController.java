package motorbike_reservation_system.admin_CRUD.Fault.Parts.SuspensionSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.Engine;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.EngineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/suspensionSystem")
public class SuspensionSystemController {

    @Autowired
    private SuspensionSystemService suspensionSystemService;

    @PostMapping("/addSuspensionSystem")
    public SuspensionSystem addSuspensionSystem(@RequestBody SuspensionSystem suspensionSystem) {
        return suspensionSystemService.saveSuspensionSystem(suspensionSystem);
    }

    @GetMapping("/suspensionSystem")
    public List<SuspensionSystem> findAllSuspensionSystem() {
        return suspensionSystemService.getSuspensionSystemAll();
    }

    @GetMapping("/suspensionSystemById/{suspensionSystemId}")
    public SuspensionSystem findSuspensionSystemBySuspensionSystemId(@PathVariable String suspensionSystemId) {
        return suspensionSystemService.getSuspensionSystem(suspensionSystemId);
    }

    @PutMapping("/updateSuspensionSystem")
    public SuspensionSystem updateSuspensionSystem(@RequestBody SuspensionSystem suspensionSystem) {
        return suspensionSystemService.updateSuspensionSystem(suspensionSystem);
    }

    @DeleteMapping("/deleteSuspensionSystem/{suspensionSystemId}")
    public String deleteSuspensionSystem(@PathVariable String suspensionSystemId) {
        return suspensionSystemService.deleteSuspensionSystem(suspensionSystemId);
    }

}