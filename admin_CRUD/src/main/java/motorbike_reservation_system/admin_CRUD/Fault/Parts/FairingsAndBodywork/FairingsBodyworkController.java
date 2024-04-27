package motorbike_reservation_system.admin_CRUD.Fault.Parts.FairingsAndBodywork;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/fairingsBodywork")
public class FairingsBodyworkController {

    @Autowired
    private FairingsBodyworkService fairingsBodyworkService;

    @PostMapping("/addFairingsBodywork")
    public FairingsBodywork addFairingBodywork(@RequestBody FairingsBodywork fairingsBodywork) {
        return fairingsBodyworkService.saveFairingsBodywork(fairingsBodywork);
    }

    @GetMapping("/fairingsBodywork")
    public List<FairingsBodywork> findAllFairingBodywork() {
        return fairingsBodyworkService.getFairingsBodywork();
    }

    @GetMapping("/fairingsBodyworkById/{fairingBodyworkId}")
    public FairingsBodywork findFairingBodyworkByFairingBodyworkId(@PathVariable String fairingBodyworkId) {
        return fairingsBodyworkService.getFairingsBodywork(fairingBodyworkId);
    }

    @PutMapping("/updateFairingsBodywork")
    public FairingsBodywork updateFairingAndBodywork(@RequestBody FairingsBodywork fairingsBodywork) {
        return fairingsBodyworkService.updateFairingsBodyWork(fairingsBodywork);
    }


    @DeleteMapping("/deleteFairingsBodywork/{fairingBodyworkId}")
    public String deleteFairingBodywork(@PathVariable String fairingBodyworkId) {
        return fairingsBodyworkService.deleteFairingsBodywork(fairingBodyworkId);
    }

}