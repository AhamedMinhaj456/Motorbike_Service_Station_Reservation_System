package motorbike_reservation_system.admin_CRUD.Fault.Company;

import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="company")
public class Company {

    @Id
    private String companyId;

    private String bikeCompany;

    public Company() {
    }

    public Company(String companyId, String bikeCompany) {
        this.companyId = companyId;
        this.bikeCompany = bikeCompany;
    }

    public Company(String bikeCompany) {
        this.bikeCompany = bikeCompany;
    }

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

    public String getBikeCompany() {
        return bikeCompany;
    }

    public void setBikeCompany(String bikeCompany) {
        this.bikeCompany = bikeCompany;
    }

    @Override
    public String toString() {
        return "Company{" + "companyId=" + companyId + ", bikeCompany=" + bikeCompany + '}';
    }


    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (companyId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.companyId = "BC" + randomDigits;
        }
    }

    private String generateRandomDigits(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
}
