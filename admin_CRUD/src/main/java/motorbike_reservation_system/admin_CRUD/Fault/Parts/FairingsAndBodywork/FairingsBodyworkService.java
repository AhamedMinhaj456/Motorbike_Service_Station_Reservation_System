package motorbike_reservation_system.admin_CRUD.Fault.Parts.FairingsAndBodywork;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.Engine;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.EngineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FairingsBodyworkService {

    @Autowired
    private FairingsBodyworkRepo fairingsBodyworkRepo;

    public FairingsBodywork saveFairingsBodywork(FairingsBodywork fairingsBodywork) {
        return fairingsBodyworkRepo.save(fairingsBodywork);
    }

    public FairingsBodywork getFairingsBodywork(String fairingsBodywork) {
        return fairingsBodyworkRepo.findByFairingBodywork(fairingsBodywork);
    }

    public List<FairingsBodywork> getFairingsBodywork() {
        return fairingsBodyworkRepo.findAll();
    }

    public String deleteFairingsBodywork(String fairingBodyworkId){
        fairingsBodyworkRepo.deleteById(fairingBodyworkId);
        return "product removed !! " + fairingBodyworkId;
    }

    public FairingsBodywork updateFairingsBodyWork(FairingsBodywork fairingsBodywork) {
        FairingsBodywork existingFairingsBodywork = fairingsBodyworkRepo.findByFairingBodywork(fairingsBodywork.getFairingBodywork());
        existingFairingsBodywork.setFairingBodywork(fairingsBodywork.getFairingBodywork());
        return fairingsBodyworkRepo.save(fairingsBodywork);
    }

}
