package motorbike_reservation_system.admin_CRUD.Fault.Parts.Transmission;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/transmission")
public class TransmissionController {

    @Autowired
    private TransmissionService transmissionService;

    @PostMapping("/addTransmission")
    public Transmission addTransmission(@RequestBody Transmission transmission) {
        return transmissionService.saveTransmission(transmission);
    }

    @GetMapping("/transmission")
    public List<Transmission> findAllTransmission() {
        return transmissionService.getTransmission();
    }

    @GetMapping("/transmissionById/{transmissionId}")
    public Transmission findTransmissionByTransmissionId(@PathVariable String transmissionId) {
        return transmissionService.getTransmission(transmissionId);
    }

    @PutMapping("/updateTransmission")
    public Transmission updateTransmission(@RequestBody Transmission transmission) {
        return transmissionService.updateTransmission(transmission);
    }

    @DeleteMapping("/deleteTransmission/{transmissionId}")
    public String deleteTransmission(@PathVariable String transmissionId) {
        return transmissionService.deleteTransmission(transmissionId);
    }

}
