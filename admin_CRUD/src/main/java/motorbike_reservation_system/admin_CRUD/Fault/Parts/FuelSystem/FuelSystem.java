package motorbike_reservation_system.admin_CRUD.Fault.Parts.FuelSystem;


import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="fuel_system")
public class FuelSystem {

    @Id
    private String FuelSystemId;

    private String fuelSystem;

    public FuelSystem() {
    }

    public FuelSystem(String FuelSystemId, String fuelSystem) {
        this.FuelSystemId = FuelSystemId;
        this.fuelSystem = fuelSystem;
    }

    public FuelSystem( String fuelSystem) {

        this.fuelSystem = fuelSystem;
    }

    public String getFuelSystemId() {
        return FuelSystemId;
    }

    public void setFuelSystemId(String FuelSystemId) {
        this.FuelSystemId = FuelSystemId;
    }

    public String getFuelSystem() {
        return fuelSystem;
    }

    public void setFuelSystem(String fuelSystem) {
        this.fuelSystem = fuelSystem;
    }

    @Override
    public String toString() {
        return "FuelSystem{" + "FuelSystemId=" + FuelSystemId + ", fuelSystem=" + fuelSystem + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (FuelSystemId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.FuelSystemId = "FS" + randomDigits;
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
