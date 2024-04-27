package motorbike_reservation_system.admin_CRUD.Fault.Parts.FairingsAndBodywork;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine.Engine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface FairingsBodyworkRepo extends JpaRepository<FairingsBodywork, String> {
    FairingsBodywork findByFairingBodywork(String fairingsBodywork);

}
