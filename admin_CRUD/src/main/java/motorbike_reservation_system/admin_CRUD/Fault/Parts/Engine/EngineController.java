package motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/engine")
public class EngineController {


    @Autowired
    private EngineService engineService;

    @PostMapping("/addEngine")
    public Engine addEngine(@RequestBody Engine engine) {
        return engineService.saveEngine(engine);
    }

    @GetMapping("/engine")
    public List<Engine> findAllEngine() {
        return engineService.getEngineAll();
    }

    @GetMapping("/engineById/{engineId}")
    public Engine findEngineByEngineId(@PathVariable String engineId) {
        return engineService.getEngine(engineId);
    }

    @PutMapping("/updateEngine")
    public Engine updateEngine(@RequestBody Engine engine) {
        return engineService.updateEngine(engine);
    }

    @DeleteMapping("/deleteEngine/{engineId}")
    public String deleteEngine(@PathVariable String engineId) {
        return engineService.deleteEngine(engineId);
    }

}
