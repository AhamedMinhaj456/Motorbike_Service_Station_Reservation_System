package motorbike_reservation_system.admin_CRUD.ServiceType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceTypeService {

    @Autowired
    private ServiceTypeRepo serviceTypeRepo;

    public ServiceType saveServiceType(ServiceType serviceType) {
        return serviceTypeRepo.save(serviceType);
    }

    public List<ServiceType> getAllServiceType() {
        return serviceTypeRepo.findAll();
    }

    public ServiceType getServiceType(String serviceType) {
        return serviceTypeRepo.findByServiceTypeId(serviceType);
    }

    public String deleteServiceType(String serviceTypeId){
        serviceTypeRepo.deleteById(serviceTypeId);
        return "product removed !! " + serviceTypeId;
    }

    public ServiceType updateServiceType(ServiceType serviceType) {
        ServiceType existingServiceType = serviceTypeRepo.findByServiceTypeId(serviceType.getServiceTypeId());
        existingServiceType.setServiceType(serviceType.getServiceType());
        existingServiceType.setServiceTypeDescription(serviceType.getServiceTypeDescription());
        return serviceTypeRepo.save(existingServiceType);
    }

}
