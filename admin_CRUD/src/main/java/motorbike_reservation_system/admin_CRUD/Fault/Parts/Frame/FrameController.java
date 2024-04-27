package motorbike_reservation_system.admin_CRUD.Fault.Parts.Frame;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/frame")
public class FrameController {

    @Autowired
    private FrameService frameService;

    @PostMapping("/addFrame")
    public Frame addFrame(@RequestBody Frame frame) {
        return frameService.saveFrame(frame);
    }

    @GetMapping("/frame")
    public List<Frame> findAllFrame() {
        return frameService.getFrame();
    }

    @GetMapping("/frameById/{frameId}")
    public Frame findFrameByFrameId(@PathVariable String frameId) {
        return frameService.getFrame(frameId);
    }

    @PutMapping("/updateFrame")
    public Frame updateFrame(@RequestBody Frame frame) {
        return frameService.updateFrame(frame);
    }

    @DeleteMapping("/deleteFrame/{frameId}")
    public String deleteFrame(@PathVariable String frameId) {
        return frameService.deleteFrame(frameId);
    }

}

