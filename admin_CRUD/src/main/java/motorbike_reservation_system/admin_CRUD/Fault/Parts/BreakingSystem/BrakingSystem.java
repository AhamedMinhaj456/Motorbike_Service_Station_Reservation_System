package motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem;

import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="braking_system")
public class BrakingSystem {

    @Id
    private String BrakingSystemId;

    private String breakingSystem;

    public BrakingSystem() {
    }

    public BrakingSystem(String brakingSystemId, String breakingSystem) {
        BrakingSystemId = brakingSystemId;
        this.breakingSystem = breakingSystem;
    }

    public BrakingSystem(String breakingSystem) {
        this.breakingSystem = breakingSystem;
    }

    public String getBrakingSystem() {
        return breakingSystem;
    }

    public void setBrakingSystem(String breakingSystem) {
        this.breakingSystem = breakingSystem;
    }

    public String getBrakingSystemId() {
        return BrakingSystemId;
    }

    public void setBrakingSystemId(String BrakingSystemId) {
        this.BrakingSystemId = BrakingSystemId;
    }

    @Override
    public String toString() {
        return "BrakingSystem{" + "BrakingSystemId=" + BrakingSystemId + ", breakingSystem=" + breakingSystem + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (BrakingSystemId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.BrakingSystemId = "BS" + randomDigits;
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
