package motorbike_reservation_system.admin_CRUD.Fault.Company;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepo companyRepo;

    public Company saveCompany(Company company) {
        return companyRepo.save(company);
    }

    public List<Company> getCompany() {
        return companyRepo.findAll();
    }

    public Company getCompany(String bikeCompany) {
        return companyRepo.findByBikeCompany(bikeCompany);
    }

    public String deleteCompany(String companyId){
        companyRepo.deleteById(companyId);
        return "product removed !! " + companyId;
    }

    public Company updateCompany(Company company) {
        Company existingCompany = companyRepo.findByBikeCompany(company.getBikeCompany());
        existingCompany.setBikeCompany(company.getBikeCompany());
        return companyRepo.save(company);
    }

}