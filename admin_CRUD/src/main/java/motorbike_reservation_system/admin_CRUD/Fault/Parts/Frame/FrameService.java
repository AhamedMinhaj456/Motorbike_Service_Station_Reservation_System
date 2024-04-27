package motorbike_reservation_system.admin_CRUD.Fault.Parts.Frame;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FrameService {

    @Autowired
    private FrameRepo frameRepo;

    public Frame saveFrame(Frame frame) {
        return frameRepo.save(frame);
    }

    public List<Frame> getFrame() {
        return frameRepo.findAll();
    }

    public Frame getFrame(String frame) {
        return frameRepo.findByFrame(frame);
    }

    public String deleteFrame(String frameId){
        frameRepo.deleteById(frameId);
        return "product removed !! " + frameId;
    }

    public Frame updateFrame(Frame frame) {
        Frame existingFrame = frameRepo.findByFrame(frame.getFrame());
        existingFrame.setFrame(frame.getFrame());
        return frameRepo.save(frame);
    }

}
