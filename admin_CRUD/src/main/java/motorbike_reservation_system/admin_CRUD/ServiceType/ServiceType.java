package motorbike_reservation_system.admin_CRUD.ServiceType;

import jakarta.persistence.*;
import lombok.*;

import java.util.Random;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "service_type")
public class ServiceType {
    @Id
    private String serviceTypeId;
    private String serviceType;
    private String serviceTypeDescription;

    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (serviceTypeId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.serviceTypeId = "Service" + randomDigits;
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
