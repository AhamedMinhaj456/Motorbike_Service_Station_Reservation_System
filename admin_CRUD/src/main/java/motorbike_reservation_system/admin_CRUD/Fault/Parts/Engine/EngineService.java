package motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EngineService {

    @Autowired
    private EngineRepo engineRepo;

    public Engine saveEngine(Engine engine) {
        return engineRepo.save(engine);
    }

    public Engine getEngine(String engine) {
        return engineRepo.findByEngine(engine);
    }
    public List<Engine> getEngineAll() {
        return engineRepo.findAll();
    }

    public String deleteEngine(String engineId){
        engineRepo.deleteById(engineId);
        return "product removed !! " + engineId;
    }

    public Engine updateEngine(Engine engine) {
        Engine existingEngine = engineRepo.findByEngine(engine.getEngine());
        existingEngine.setEngine(engine.getEngine());
        return engineRepo.save(engine);
    }

}

