package com.motorbike_reservation_system.backend.Feedback;

import com.motorbike_reservation_system.backend.Fault_Management.Fault;
import com.motorbike_reservation_system.backend.Fault_Management.FaultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> getFeedback() {
        return feedbackRepo.findAll();
    }

//    public Product getProductById(int id) {
//        return repository.findById(id).orElse(null);
//    }

    public List<Feedback> getFeedbacks(String comment){
        return feedbackRepo.findByComment(comment);
    }

    public String deleteFeedback(int feedbackId){
        feedbackRepo.deleteById(feedbackId);
        return "product removed !! " + feedbackId;
    }

    public Feedback updateFeedback(Feedback feedback) {
        Feedback existingFeedback = feedbackRepo.findById(feedback.getFeedbackId()).orElse(null);
        existingFeedback.setFeedback(feedback.getFeedback());
//        existingProduct.setQuantity(product.getQuantity());
//        existingProduct.setPrice(product.getPrice());
        return feedbackRepo.save(existingFeedback);
    }
}
