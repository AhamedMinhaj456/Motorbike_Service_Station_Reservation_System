package motorbike_reservation_system.admin_CRUD.Fault.MotorbikeModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface BikeModelRepo extends JpaRepository<BikeModel, String> {
    BikeModel findByBikeModel(String bikeModel);

}
