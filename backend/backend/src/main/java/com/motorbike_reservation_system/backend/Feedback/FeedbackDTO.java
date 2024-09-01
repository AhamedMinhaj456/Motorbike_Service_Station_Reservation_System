package com.motorbike_reservation_system.backend.Feedback;



import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class FeedbackDTO {

    private int feedbackId;
    private String rating;
    private String comment;
    private int shopId;
    private String serviceId;
}
