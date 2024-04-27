package motorbike_reservation_system.admin_CRUD.Fault.Parts.SuspensionSystem;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.Engine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface SuspensionSystemRepo extends JpaRepository<SuspensionSystem, String> {
    SuspensionSystem findBySuspensionSystem(String suspensionSystem);

}
