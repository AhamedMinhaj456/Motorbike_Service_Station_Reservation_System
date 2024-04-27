package motorbike_reservation_system.admin_CRUD.Fault.Parts.ExhaustSystem;


import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="exhaust_system")
public class ExhaustSystem {

    @Id
    private String exhaustSystemId;

    private String exhaustSystem;

    public ExhaustSystem() {
    }

    public ExhaustSystem(String exhaustSystemId, String exhaustSystem) {
        this.exhaustSystemId = exhaustSystemId;
        this.exhaustSystem = exhaustSystem;
    }

    public ExhaustSystem(String exhaustSystem) {
        this.exhaustSystem = exhaustSystem;
    }

    public String getExhaustSystemId() {
        return exhaustSystemId;
    }

    public void setExhaustSystemId(String exhaustSystemId) {
        this.exhaustSystemId = exhaustSystemId;
    }

    public String getExhaustSystem() {
        return exhaustSystem;
    }

    public void setExhaustSystem(String exhaustSystem) {
        this.exhaustSystem = exhaustSystem;
    }

    @Override
    public String toString() {
        return "ExhaustSystem{" + "exhaustSystemId=" + exhaustSystemId + ", exhaustSystem=" + exhaustSystem + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (exhaustSystemId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.exhaustSystemId = "ES" + randomDigits;
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
