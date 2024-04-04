package com.motorbike_reservation_system.backend.Fault_Management;

import com.motorbike_reservation_system.backend.Reservation.Reservation;
import jakarta.persistence.*;
import java.util.Random;

@Entity
@Table(name = "fault")
public class Fault {

    @Id
    private String faultId;
    private String faultName;
    private String bikeName;
    private String bikeType;
    private String motorbikeNumber;
    private String category;
    private String faultDescription;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "reservation", referencedColumnName = "reservationId")
    private Reservation reservation;

    public Fault() {
    }

    public Fault(String faultId, String faultName, String bikeName, String bikeType, String motorbikeNumber, String category, String faultDescription, Reservation reservation) {
        this.faultId = faultId;
        this.faultName = faultName;
        this.bikeName = bikeName;
        this.bikeType = bikeType;
        this.motorbikeNumber = motorbikeNumber;
        this.category = category;
        this.faultDescription = faultDescription;
        this.reservation = reservation;
    }

    public Fault(String faultName, String bikeName, String bikeType, String motorbikeNumber, String category, String faultDescription, Reservation reservation) {
        this.faultName = faultName;
        this.bikeName = bikeName;
        this.bikeType = bikeType;
        this.motorbikeNumber = motorbikeNumber;
        this.category = category;
        this.faultDescription = faultDescription;
        this.reservation = reservation;
    }

    @Override
    public String toString() {
        return "Fault{" +
                "faultId='" + faultId + '\'' +
                ", faultName='" + faultName + '\'' +
                ", bikeName='" + bikeName + '\'' +
                ", bikeType='" + bikeType + '\'' +
                ", motorbikeNumber='" + motorbikeNumber + '\'' +
                ", category='" + category + '\'' +
                ", faultDescription='" + faultDescription + '\'' +
                ", reservation=" + reservation +
                '}';
    }

    public String getFaultId() {
        return faultId;
    }

    public void setFaultId(String faultId) {
        this.faultId = faultId;
    }

    public String getFaultName() {
        return faultName;
    }

    public void setFaultName(String faultName) {
        this.faultName = faultName;
    }

    public String getBikeName() {
        return bikeName;
    }

    public void setBikeName(String bikeName) {
        this.bikeName = bikeName;
    }

    public String getBikeType() {
        return bikeType;
    }

    public void setBikeType(String bikeType) {
        this.bikeType = bikeType;
    }

    public String getMotorbikeNumber() {
        return motorbikeNumber;
    }

    public void setMotorbikeNumber(String motorbikeNumber) {
        this.motorbikeNumber = motorbikeNumber;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getFaultDescription() {
        return faultDescription;
    }

    public void setFaultDescription(String faultDescription) {
        this.faultDescription = faultDescription;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }


    /////// Custom logic to generate the next available ID //////////////////////////////////////

    @PrePersist
    public void generateId() {
        if (faultId == null) {
            // Generate a random 6-digit number
            String randomDigits = generateRandomDigits(6);

            // Assign the ID as "FM" followed by the random digits
            this.faultId = "FM" + randomDigits;
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
