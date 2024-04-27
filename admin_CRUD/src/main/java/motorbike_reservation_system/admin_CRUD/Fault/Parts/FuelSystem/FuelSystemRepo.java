package motorbike_reservation_system.admin_CRUD.Fault.Parts.FuelSystem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface FuelSystemRepo extends JpaRepository<FuelSystem, String> {
    FuelSystem findByFuelSystem(String fuelSystem);

}
