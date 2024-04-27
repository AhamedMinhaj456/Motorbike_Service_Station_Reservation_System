package motorbike_reservation_system.admin_CRUD.Fault.Parts.WheelsAndTires;

import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="wheels_and_tires")
public class WheelsTires {

    @Id
    private String wheelsTiresId;

    private String wheelsTires;

    public WheelsTires() {
    }

    public WheelsTires(String wheelsTiresId, String wheelsTires) {
        this.wheelsTiresId = wheelsTiresId;
        this.wheelsTires = wheelsTires;
    }

    public WheelsTires(String wheelsTires) {
        this.wheelsTires = wheelsTires;
    }

    public String getWheelsTiresId() {
        return wheelsTiresId;
    }

    public void setWheelsTiresId(String wheelsTiresId) {
        this.wheelsTiresId = wheelsTiresId;
    }

    public String getWheelsTires() {
        return wheelsTires;
    }

    public void setWheelsTires(String wheelsTires) {
        this.wheelsTires = wheelsTires;
    }

    @Override
    public String toString() {
        return "WheelsTires{" + "wheelsTiresId=" + wheelsTiresId + ", wheelsTires=" + wheelsTires + '}';
    }



    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (wheelsTiresId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.wheelsTiresId = "WT" + randomDigits;
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
