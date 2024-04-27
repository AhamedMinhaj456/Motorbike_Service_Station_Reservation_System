package motorbike_reservation_system.admin_CRUD.Fault.Parts.Transmission;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransmissionService {

    @Autowired
    private TransmissionRepo transmissionRepo;

    public Transmission saveTransmission(Transmission transmission) {
        return transmissionRepo.save(transmission);
    }

    public List<Transmission> getTransmission() {
        return transmissionRepo.findAll();
    }

    public Transmission getTransmission(String transmissionId) {
        return transmissionRepo.findById(transmissionId).orElse(null);
    }


    public String deleteTransmission(String transmissionId){
        transmissionRepo.deleteById(transmissionId);
        return "product removed !! " + transmissionId;
    }

    public Transmission updateTransmission(Transmission transmission) {
        Transmission existingTransmission = transmissionRepo.findByTransmission(transmission.getTransmission());
        existingTransmission.setTransmission(transmission.getTransmission());
        return transmissionRepo.save(transmission);
    }


}
