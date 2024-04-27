package motorbike_reservation_system.admin_CRUD.Fault.Parts.Frame;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface FrameRepo extends JpaRepository<Frame, String> {

    Frame findByFrame(String frame);

}
