package com.motorbike_reservation_system.backend.Feedback;

import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int feedbackId;

    private String rating;
    private String comment;

    @ManyToOne
    @JoinColumn(name = "shop_id")
    private Shop shop;
//
//    @OneToOne(mappedBy = "feedback",
//            cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
//    private Repair repair;

    @OneToOne(mappedBy = "feedback")
    private Repair repair;


//    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name = "feedback")
//    private Feedback feedback;

//    public Feedback() {
//    }
//
//    public Feedback(int  feedbackId, String rating, String feedback, Shop shop) {
//        this.feedbackId = feedbackId;
//        this.rating = rating;
//        this.comment = feedback;
//        this.shop = shop;
//    }
//
//    public Feedback(String rating, String feedback, Shop shop) {
//        this.rating = rating;
//        this.comment = feedback;
//        this.shop = shop;
//    }
//
//    public Integer getFeedbackId() {
//        return feedbackId;
//    }
//
//    public void setFeedbackId(int  feedbackId) {
//        this.feedbackId = feedbackId;
//    }
//
//    public String getRating() {
//        return rating;
//    }
//
//    public void setRating(String rating) {
//        this.rating = rating;
//    }
//
//    public String getFeedback() {
//        return comment;
//    }
//
//    public void setFeedback(String feedback) {
//        this.comment = feedback;
//    }
//
//    public Shop getShop() {
//        return shop;
//    }
//
//    public void setShop(Shop shop) {
//        this.shop = shop;
//    }
//
//    public Repair getRepair() {
//        return repair;
//    }
//
//    public void setRepair(Repair repair) {
//        this.repair = repair;
//    }
//
//
//
//
//
//    @Override
//    public String toString() {
//        return "Feedback{" +
//                "feedbackId=" + feedbackId +
//                ", rating='" + rating + '\'' +
//                ", feedback='" + feedback + '\'' +
//                ", shop=" + shop +
//                ", repair=" + repair +
//                '}';
//    }
//
}
