package motorbike_reservation_system.admin_CRUD.Fault.Parts.Frame;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;

import java.util.Random;

@Entity
@Table(name = "frame")
public class Frame {

    @Id
    private String frameId;

    private String frame;

    public Frame() {
    }

    public Frame(String frameId, String frame) {
        this.frameId = frameId;
        this.frame = frame;
    }

    public Frame(String frame) {
        this.frame = frame;
    }

    public String getFrameId() {
        return frameId;
    }

    public void setFrameId(String frameId) {
        this.frameId = frameId;
    }

    public String getFrame() {
        return frame;
    }

    public void setFrame(String frame) {
        this.frame = frame;
    }

    @Override
    public String toString() {
        return "Frame{" + "frameId=" + frameId + ", frame=" + frame + '}';
    }


    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (frameId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.frameId = "Fr" + randomDigits;
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
