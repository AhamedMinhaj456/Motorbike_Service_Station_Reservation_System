package motorbike_reservation_system.admin_CRUD.Fault.MotorbikeModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/bikeModel")
public class BikeModelController {

    @Autowired
    private BikeModelService bikeModelService;


    @PostMapping("/addBikeModel")
    public BikeModel addBikeModel(@RequestBody BikeModel bikeModel) {
        return bikeModelService.saveBikeModel(bikeModel);
    }

    @GetMapping("/bikeModel")
    public List<BikeModel> findAllBikeModel() {
        return bikeModelService.getAllBikeModel();
    }

    @GetMapping("/bikeModelById/{bikeModelId}")
    public BikeModel findBikeModelByBikeModelId(@PathVariable String bikeModelId) {
        return bikeModelService.getBikeModel(bikeModelId);
    }

    @PutMapping("/updateBikeModel")
    public BikeModel updateBikeModel(@RequestBody BikeModel bikeModel) {
        return bikeModelService.updateBikeModel(bikeModel);
    }

    @DeleteMapping("/deleteBikeModel/{bikeModelId}")
    public String deleteBikeModel(@PathVariable String bikeModelId) {
        return bikeModelService.deleteBikeModel(bikeModelId);
    }
}
