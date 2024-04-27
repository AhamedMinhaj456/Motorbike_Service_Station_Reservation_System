package motorbike_reservation_system.admin_CRUD.Fault.Parts.HandleAndCowl;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HandleCowlService {

    @Autowired
    private HandleCowlRepo handleCowlRepo;

    public HandleCowl saveHandleCowl(HandleCowl handleCowl) {
        return handleCowlRepo.save(handleCowl);
    }

    public List<HandleCowl> getHandleCowl() {
        return handleCowlRepo.findAll();
    }

    public HandleCowl getHandleCowl(String handleCowl) {
        return handleCowlRepo.findByHandleCowl(handleCowl);
    }

    public String deleteHandleCowl(String handleCowlId){
        handleCowlRepo.deleteById(handleCowlId);
        return "product removed !! " + handleCowlId;
    }

    public HandleCowl updateHandleCowl(HandleCowl handleCowl) {
        HandleCowl existingHandleCowl = handleCowlRepo.findByHandleCowl(handleCowl.getHandleCowl());
        existingHandleCowl.setHandleCowl(handleCowl.getHandleCowl());
        return handleCowlRepo.save(handleCowl);
    }

}
