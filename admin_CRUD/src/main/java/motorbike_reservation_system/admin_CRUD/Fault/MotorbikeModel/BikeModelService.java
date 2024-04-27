package motorbike_reservation_system.admin_CRUD.Fault.MotorbikeModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BikeModelService {

    @Autowired
    private BikeModelRepo bikeModelRepo;

    public BikeModel saveBikeModel(BikeModel bikeModel) {
        return bikeModelRepo.save(bikeModel);
    }

    public List<BikeModel> getAllBikeModel() {
        return bikeModelRepo.findAll();
    }

    public BikeModel getBikeModel(String bikeModel) {
        return bikeModelRepo.findByBikeModel(bikeModel);
    }

    public String deleteBikeModel(String bikeModelId){
        bikeModelRepo.deleteById(bikeModelId);
        return "product removed !! " + bikeModelId;
    }

    public BikeModel updateBikeModel(BikeModel bikeModel) {
        BikeModel existingBikeModel = bikeModelRepo.findByBikeModel(bikeModel.getBikeModel());
        existingBikeModel.setBikeModel(bikeModel.getBikeModel());
        return bikeModelRepo.save(bikeModel);
    }

}
