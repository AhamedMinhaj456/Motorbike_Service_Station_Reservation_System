package motorbike_reservation_system.admin_CRUD.Fault.Parts.ElectricalSystem;


import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="electrical_system")
public class ElectricalSystem {

    @Id
    private String electricalSystemId;

    private String electricalSystem;

    public ElectricalSystem() {
    }

    public ElectricalSystem(String electricalSystemId, String electricalSystem) {
        this.electricalSystemId = electricalSystemId;
        this.electricalSystem = electricalSystem;
    }

    public ElectricalSystem(String electricalSystem) {
        this.electricalSystem = electricalSystem;
    }

    public String getElectricalSystemId() {
        return electricalSystemId;
    }

    public void setElectricalSystemId(String electricalSystemId) {
        this.electricalSystemId = electricalSystemId;
    }

    public String getElectricalSystem() {
        return electricalSystem;
    }

    public void setElectricalSystem(String electricalSystem) {
        this.electricalSystem = electricalSystem;
    }

    @Override
    public String toString() {
        return "ElectricalSystem{" + "electricalSystemId=" + electricalSystemId + ", electricalSystem=" + electricalSystem + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (electricalSystemId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.electricalSystemId = "ES" + randomDigits;
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
