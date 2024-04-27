package motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrakingSystemService {
    @Autowired
    private BrakingSystemRepo brakingSystemRepo;

    public BrakingSystem saveBreakingSystem(BrakingSystem brakingSystem) {
        return brakingSystemRepo.save(brakingSystem);
    }

    public List<BrakingSystem> getBreakingSystem() {
        return brakingSystemRepo.findAll();
    }

    public BrakingSystem getBreakingSystem(String breakingSystem) {
        return brakingSystemRepo.findByBreakingSystem(breakingSystem);
    }

    public String deleteBrakingSystem(String brakingSystemId){
        brakingSystemRepo.deleteById(brakingSystemId);
        return "product removed !! " + brakingSystemId;
    }

    public BrakingSystem updateBrakingSystem(BrakingSystem brakingSystem) {
        BrakingSystem existingBrakingSystem = brakingSystemRepo.findByBreakingSystem(brakingSystem.getBrakingSystem());
        existingBrakingSystem.setBrakingSystem(brakingSystem.getBrakingSystem());
        return brakingSystemRepo.save(brakingSystem);
    }
}
