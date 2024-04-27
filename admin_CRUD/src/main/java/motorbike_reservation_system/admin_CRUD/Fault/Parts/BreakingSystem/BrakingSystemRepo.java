package motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface BrakingSystemRepo extends JpaRepository<BrakingSystem, String> {
    BrakingSystem findByBreakingSystem(String breakingSystem);

    }
