package com.motorbike_reservation_system.backend.Feedback;

import com.motorbike_reservation_system.backend.Authentication.Shop.Entity.Shop;
import com.motorbike_reservation_system.backend.Authentication.Shop.Repo.ShopRepo;
import com.motorbike_reservation_system.backend.Fault_Management.Fault;
import com.motorbike_reservation_system.backend.Fault_Management.FaultRepository;
import com.motorbike_reservation_system.backend.Repair_Service.Repair;
import com.motorbike_reservation_system.backend.Repair_Service.RepairRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepo feedbackRepo;
    @Autowired
    private ShopRepo shopRepo;
    @Autowired
    private RepairRepo repairRepo;

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
       // existingFeedback.setFeedback(feedback.getFeedback());
//        existingProduct.setQuantity(product.getQuantity());
//        existingProduct.setPrice(product.getPrice());
        return feedbackRepo.save(existingFeedback);
    }

    public Feedback addFeedback(FeedbackDTO addFeedbackRequest) {
        Shop shop = shopRepo.findByShopId(addFeedbackRequest.getShopId());
        Repair repair = repairRepo.findByServiceId(addFeedbackRequest.getServiceId());
        Feedback feedback = Feedback.builder()
                .rating(addFeedbackRequest.getRating())
                .comment(addFeedbackRequest.getComment())
                .shop(shop)
                .repair(repair)
                .build();
        return feedbackRepo.save(feedback);
    }
}
