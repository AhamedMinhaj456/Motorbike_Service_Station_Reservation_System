package motorbike_reservation_system.admin_CRUD.Fault.Parts.Transmission;


import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="transmission")
public class Transmission {

    @Id
    private String transmissionId;

    private String transmission;

    public Transmission() {
    }

    public Transmission(String transmissionId, String transmission) {
        this.transmissionId = transmission;
        this.transmission = transmission;
    }

    public Transmission( String transmission) {

        this.transmission = transmission;
    }

    public String getTransmissionId() {
        return transmissionId;
    }

    public void setTransmissionId(String transmissionId) {
        this.transmissionId = transmissionId;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    @Override
    public String toString() {
        return "Transmission{" + "transmissionId=" + transmissionId + ", transmission=" + transmission + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (transmissionId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.transmissionId = "Tr" + randomDigits;
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
