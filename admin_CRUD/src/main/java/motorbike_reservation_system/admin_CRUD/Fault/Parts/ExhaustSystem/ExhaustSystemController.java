package motorbike_reservation_system.admin_CRUD.Fault.Parts.ExhaustSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/exhaustSystem")
public class ExhaustSystemController {

    @Autowired
    private ExhaustSystemService exhaustSystemService;

    @PostMapping("/addExhaustSystem")
    public ExhaustSystem addExhaustSystem(@RequestBody ExhaustSystem exhaustSystem) {
        return exhaustSystemService.saveExhaustSystem(exhaustSystem);
    }

    @GetMapping("/exhaustSystem")
    public List<ExhaustSystem> findAllExhaustSystem() {
        return exhaustSystemService.getExhaustSystem();
    }

    @GetMapping("/exhaustSystemById/{exhaustSystemId}")
    public ExhaustSystem findExhaustSystemByExhaustSystemId(@PathVariable String exhaustSystemId) {
        return exhaustSystemService.getExhaustSystem(exhaustSystemId);
    }

    @PutMapping("/updateExhaustSystem")
    public ExhaustSystem updateExhaustSystem(@RequestBody ExhaustSystem exhaustSystem) {
        return exhaustSystemService.updateExhauseSystem(exhaustSystem);
    }

    @DeleteMapping("/deleteExhaustSystem/{exhaustSystemId}")
    public String deleteExhaustSystem(@PathVariable String exhaustSystemId) {
        return exhaustSystemService.deleteExhaustSystem(exhaustSystemId);
    }

}

