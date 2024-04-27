package motorbike_reservation_system.admin_CRUD.Fault.Parts.FairingsAndBodywork;


import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="fairings_bodywork")
public class FairingsBodywork {

    @Id
    private String FairingBodyworkId;

    private String fairingBodywork;

    public FairingsBodywork() {
    }

    public FairingsBodywork(String fairingBodyworkId, String fairingBodywork) {
        this.FairingBodyworkId = fairingBodyworkId;
        this.fairingBodywork = fairingBodywork;
    }

    public FairingsBodywork(String fairingBodywork) {
        this.fairingBodywork = fairingBodywork;
    }

    public String getFairingBodyworkId() {
        return FairingBodyworkId;
    }

    public void setFairingBodyworkId(String fairingBodyworkId) {
        this.FairingBodyworkId = fairingBodyworkId;
    }

    public String getFairingBodywork() {
        return fairingBodywork;
    }

    public void setFairingBodywork(String fairingBodywork) {
        this.fairingBodywork = fairingBodywork;
    }

    @Override
    public String toString() {
        return "FairingsBodywork{" + "FairingBodyworkId=" + FairingBodyworkId + ", fairingBodywork=" + fairingBodywork + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (FairingBodyworkId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.FairingBodyworkId = "FBW" + randomDigits;
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
