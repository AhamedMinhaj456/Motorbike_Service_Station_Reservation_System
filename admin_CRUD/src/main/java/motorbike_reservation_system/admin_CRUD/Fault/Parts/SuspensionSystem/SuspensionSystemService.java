package motorbike_reservation_system.admin_CRUD.Fault.Parts.SuspensionSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.Engine;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.EngineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuspensionSystemService {

    @Autowired
    private SuspensionSystemRepo suspensionSystemRepo;

    public SuspensionSystem saveSuspensionSystem(SuspensionSystem suspensionSystem) {
        return suspensionSystemRepo.save(suspensionSystem);
    }

    public SuspensionSystem getSuspensionSystem(String suspensionSystem) {
        return suspensionSystemRepo.findBySuspensionSystem(suspensionSystem);
    }

    public List<SuspensionSystem> getSuspensionSystemAll() {
        return suspensionSystemRepo.findAll();
    }

    public String deleteSuspensionSystem(String suspensionSystemId){
        suspensionSystemRepo.deleteById(suspensionSystemId);
        return "product removed !! " + suspensionSystemId;
    }

    public SuspensionSystem updateSuspensionSystem(SuspensionSystem suspensionSystem) {
        SuspensionSystem existingSuspensionSystem = suspensionSystemRepo.findBySuspensionSystem(suspensionSystem.getSuspensionSystem());
        existingSuspensionSystem.setSuspensionSystem(suspensionSystem.getSuspensionSystem());
        return suspensionSystemRepo.save(suspensionSystem);
    }

}
