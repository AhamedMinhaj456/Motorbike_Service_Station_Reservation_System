package motorbike_reservation_system.admin_CRUD.Fault.Parts.ExhaustSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExhaustSystemService {

    @Autowired
    private ExhaustSystemRepo exhaustSystemRepo;

    public ExhaustSystem saveExhaustSystem(ExhaustSystem exhaustSystem) {
        return exhaustSystemRepo.save(exhaustSystem);
    }

    public List<ExhaustSystem> getExhaustSystem() {
        return exhaustSystemRepo.findAll();
    }

    public ExhaustSystem getExhaustSystem(String exhaustSystem) {
        return exhaustSystemRepo.findByExhaustSystem(exhaustSystem);
    }

    public String deleteExhaustSystem(String exhaustSystemId){
        exhaustSystemRepo.deleteById(exhaustSystemId);
        return "product removed !! " + exhaustSystemId;
    }


    public ExhaustSystem updateExhauseSystem(ExhaustSystem brakingSystem) {
        ExhaustSystem existingBrakingSystem = exhaustSystemRepo.findByExhaustSystem(brakingSystem.getExhaustSystem());
        existingBrakingSystem.setExhaustSystem(brakingSystem.getExhaustSystem());
        return exhaustSystemRepo.save(brakingSystem);
    }

}
