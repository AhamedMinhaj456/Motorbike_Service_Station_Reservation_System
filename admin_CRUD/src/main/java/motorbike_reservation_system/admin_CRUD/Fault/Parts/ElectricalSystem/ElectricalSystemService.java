package motorbike_reservation_system.admin_CRUD.Fault.Parts.ElectricalSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElectricalSystemService {

    @Autowired
    private ElectricalSystemRepo electricalSystemRepo;

    public ElectricalSystem saveElectricalSystem(ElectricalSystem electricalSystem) {
        return electricalSystemRepo.save(electricalSystem);
    }

    public List<ElectricalSystem> getElectricalSystem() {
        return electricalSystemRepo.findAll();
    }

    public ElectricalSystem getElectricalSystem(String electricalSystem) {
        return electricalSystemRepo.findByElectricalSystem(electricalSystem);
    }

    public String deleteElectricalSystem(String electricalSystemId){
        electricalSystemRepo.deleteById(electricalSystemId);
        return "product removed !! " + electricalSystemId;
    }

    public ElectricalSystem updateElectricalSystem(ElectricalSystem electricalSystem) {
        ElectricalSystem existingElectricalSystem = electricalSystemRepo.findByElectricalSystem(electricalSystem.getElectricalSystem());
        existingElectricalSystem.setElectricalSystem(electricalSystem.getElectricalSystem());
        return electricalSystemRepo.save(electricalSystem);
    }
}
