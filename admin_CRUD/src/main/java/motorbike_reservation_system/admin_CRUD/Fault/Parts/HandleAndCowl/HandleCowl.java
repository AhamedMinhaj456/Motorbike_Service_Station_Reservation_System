package motorbike_reservation_system.admin_CRUD.Fault.Parts.HandleAndCowl;


import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="handle_and_cowl")
public class HandleCowl {

    @Id
    private String HandleCowlId;

    private String handleCowl;

    public HandleCowl() {
    }

    public HandleCowl(String HandleCowlId, String handleCowl) {
        this.HandleCowlId = HandleCowlId;
        this.handleCowl = handleCowl;
    }

    public HandleCowl(String handleAndCowl) {
        this.handleCowl = handleCowl;
    }

    public String getHandleCowlId() {
        return HandleCowlId;
    }

    public void setHandleCowlId(String HandleAndCowlId) {
        this.HandleCowlId = HandleCowlId;
    }

    public String getHandleCowl() {
        return handleCowl;
    }

    public void setHandleCowl(String handleCowl) {
        this.handleCowl = handleCowl;
    }

    @Override
    public String toString() {
        return "HandleCowl{" + "HandleCowlId=" + HandleCowlId + ", handleCowl=" + handleCowl + '}';
    }

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (HandleCowlId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.HandleCowlId = "HC" + randomDigits;
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
