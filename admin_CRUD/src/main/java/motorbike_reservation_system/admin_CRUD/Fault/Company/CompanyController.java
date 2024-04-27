package motorbike_reservation_system.admin_CRUD.Fault.Company;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/company")
public class CompanyController {

        @Autowired
        private CompanyService companyService;

        @PostMapping("/addCompany")
        public Company addCompany(@RequestBody Company company) {
            return companyService.saveCompany(company);
        }

        @GetMapping("/company")
        public List<Company> findAllCompany() {
            return companyService.getCompany();
        }

        @GetMapping("/companyById/{companyId}")
        public Company findCompanyByCompanyId(@PathVariable String companyId) {
            return companyService.getCompany(companyId);
        }

        @PutMapping("/updateCompany")
        public Company updateCompany(@RequestBody Company company) {
            return companyService.updateCompany(company);
        }

        @DeleteMapping("/deleteCompany/{companyId}")
        public String deleteCompany(@PathVariable String companyId) {
            return companyService.deleteCompany(companyId);
        }
}
