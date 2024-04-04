package com.motorbike_reservation_system.backend.Feedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/feedback")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping("/addfeedback")
    public Feedback addFeedback(@RequestBody Feedback feedback) {
        return feedbackService.saveFeedback(feedback);
    }

    @GetMapping("/getfeedback")
    public List<Feedback> findAllFeedbacks() {
        return feedbackService.getFeedback();
    }

    @GetMapping("/feedback/{feedbackId}")
    public List<Feedback> findFeedbacks(@PathVariable String comment) {
        return feedbackService.getFeedbacks(comment);
    }

    @PutMapping("/updatefeedback")
    public Feedback updateFeedback(@RequestBody Feedback feedback) {
        return feedbackService.updateFeedback(feedback);
    }

    @DeleteMapping("/deletefeedback/{feedbackId}")
    public String deleteFeedback(@PathVariable int feedbackId) {
        return feedbackService.deleteFeedback(feedbackId);
    }
}