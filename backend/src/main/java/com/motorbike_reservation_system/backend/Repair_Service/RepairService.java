package com.motorbike_reservation_system.backend.Repair_Service;

import com.motorbike_reservation_system.backend.Motorbike.Motorbike;
import com.motorbike_reservation_system.backend.Motorbike.MotorbikeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepairService {


        @Autowired
        private RepairRepo repairRepo;

        public Repair saveService(Repair repair) {
            return repairRepo.save(repair);
        }

        public List<Repair> getService() {
            return repairRepo.findAll();
        }

        public Repair getServiceByRepairServiceId(String repairServiceId) {
            return repairRepo.findByRepairServiceId(repairServiceId);
        }

        public String deleteService(String repairServiceId) {
            repairRepo.deleteById(repairServiceId);
            return "Service " + repairServiceId + " removed !! " ;
        }

        public Repair updateService(Repair repair) {
            Repair existingService = repairRepo.findByRepairServiceId(repair.getServiceId());
            existingService.setServiceTime(repair.getServiceTime());
            existingService.setServiceDate(repair.getServiceDate());
            existingService.setServiceCategory(repair.getServiceCategory());
            existingService.setServiceStatus(repair.getServiceStatus());
            existingService.setPartsNumber(repair.getPartsNumber());
            return repairRepo.save(existingService);
        }


}
