package motorbike_reservation_system.admin_CRUD.Fault.MotorbikeModel;

import jakarta.persistence.*;

import java.util.Random;

@Entity
@Table(name="model")
public class BikeModel {

    @Id
    private String modelId;

    private String bikeModel;

    public BikeModel() {
    }

    public BikeModel(String modelId, String bikeModel) {
        this.modelId = modelId;
        this.bikeModel = bikeModel;
    }

    public BikeModel(String bikeModel) {
        this.bikeModel = bikeModel;
    }

    public String getModelId() {
        return modelId;
    }

    public void setModelId(String modelId) {
        this.modelId = modelId;
    }

    public String getBikeModel() {
        return bikeModel;
    }

    public void setBikeModel(String bikeModel) {
        this.bikeModel = bikeModel;
    }

    @Override
    public String toString() {
        return "model{" + "modelId=" + modelId + ", bikeModel=" + bikeModel + '}';
    }


    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (modelId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.modelId = "BM" + randomDigits;
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
