package motorbike_reservation_system.admin_CRUD.Fault.Parts.HandleAndCowl;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/handleCowl")
public class HandleCowlController {

    @Autowired
    private HandleCowlService handleCowlService;

    @PostMapping("/addHandleCowl")
    public HandleCowl addHandleCowl(@RequestBody HandleCowl handleCowl) {
        return handleCowlService.saveHandleCowl(handleCowl);
    }

    @GetMapping("/handleCowl")
    public List<HandleCowl> findAllHandleCowl() {
        return handleCowlService.getHandleCowl();
    }

    @GetMapping("/handleCowlById/{handleCowlId}")
    public HandleCowl findHandleCowlByHandleCowlId(@PathVariable String handleCowlId) {
        return handleCowlService.getHandleCowl(handleCowlId);
    }

    @PutMapping("/updateHandleCowl")
    public HandleCowl updateHandleCowl(@RequestBody HandleCowl handleCowl) {
        return handleCowlService.updateHandleCowl(handleCowl);
    }

    @DeleteMapping("/deleteHandleCowl/{handleCowlId}")
    public String deleteHandleCowl(@PathVariable String handleCowlId) {
        return handleCowlService.deleteHandleCowl(handleCowlId);
    }

}
