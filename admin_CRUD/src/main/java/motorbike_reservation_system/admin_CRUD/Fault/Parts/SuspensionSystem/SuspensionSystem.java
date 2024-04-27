package motorbike_reservation_system.admin_CRUD.Fault.Parts.SuspensionSystem;

import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="suspension_system")
public class SuspensionSystem {

    @Id
    private String SuspensionSystemId;

    private String suspensionSystem;

    public SuspensionSystem() {
    }

    public SuspensionSystem(String SuspensionSystemId, String suspensionSystem) {
        this.SuspensionSystemId = SuspensionSystemId;
        this.suspensionSystem = suspensionSystem;
    }

    public SuspensionSystem( String suspensionSystem) {

        this.suspensionSystem = suspensionSystem;
    }

    public String getSuspensionSystemId() {
        return SuspensionSystemId;
    }

    public void setSuspensionSystemId(String SuspensionSystemId) {
        this.SuspensionSystemId = SuspensionSystemId;
    }

    public String getSuspensionSystem() {
        return suspensionSystem;
    }

    public void setSuspensionSystem(String suspensionSystem) {
        this.suspensionSystem = suspensionSystem;
    }

    @Override
    public String toString() {
        return "SuspensionSystem{" + "SuspensionSystemId=" + SuspensionSystemId + ", suspensionSystem=" + suspensionSystem + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (SuspensionSystemId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.SuspensionSystemId = "SS" + randomDigits;
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
