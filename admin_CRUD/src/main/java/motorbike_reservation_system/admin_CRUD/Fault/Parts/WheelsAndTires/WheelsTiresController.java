package motorbike_reservation_system.admin_CRUD.Fault.Parts.WheelsAndTires;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/wheelsTires")
public class WheelsTiresController {

    @Autowired
    private WheelsTiresService wheelsTiresService;

    @PostMapping("/addWheelsTires")
    public WheelsTires addWheelsTires(@RequestBody WheelsTires wheelsTires) {
        return wheelsTiresService.saveWheelsTires(wheelsTires);
    }

    @GetMapping("/wheelsTires")
    public List<WheelsTires> findAllWheelsTires() {
        return wheelsTiresService.getWheelsTires();
    }

    @GetMapping("/wheelsTiresById/{wheelsTiresId}")
    public WheelsTires findWheelsTiresByWheelsTiresId(@PathVariable String wheelsTiresId) {
        return wheelsTiresService.getWheelsTires(wheelsTiresId);
    }

    @PutMapping("/updateWheelsTires")
    public WheelsTires updateWheelsTires(@RequestBody WheelsTires wheelsTires) {
        return wheelsTiresService.updateWheelsTires(wheelsTires);
    }

    @DeleteMapping("/deleteWheelsTires/{wheelsTiresId}")
    public String deleteWheelsTires(@PathVariable String wheelsTiresId) {
        return wheelsTiresService.deleteWheelsTires(wheelsTiresId);
    }


}
