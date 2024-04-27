package motorbike_reservation_system.admin_CRUD.Fault.Parts.Engine;

import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="engine")
public class Engine {

    @Id
    private String engineId;

    private String engine;

    public Engine() {
    }

    public Engine(String engineId, String engine) {
        this.engineId = engineId;
        this.engine = engine;
    }

    public Engine( String engine) {

        this.engine = engine;
    }

    public String getEngineId() {
        return engineId;
    }

    public void setEngineId(String engineId) {
        this.engineId = engineId;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    @Override
    public String toString() {
        return "Engine{" + "engineId=" + engineId + ", engine=" + engine + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (engineId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.engineId = "EN" + randomDigits;
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
