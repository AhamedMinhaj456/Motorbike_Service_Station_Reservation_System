package motorbike_reservation_system.admin_CRUD.Subscription.SubcriptionPlan;

import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystem;
import motorbike_reservation_system.admin_CRUD.Fault.Parts.BreakingSystem.BrakingSystemRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionPlanService {

    @Autowired
    private SubscriptionPlanRepo subscriptionPlanRepo;

    public SubscriptionPlan saveSubscriptionPlan(SubscriptionPlan subscriptionPlan) {
        return subscriptionPlanRepo.save(subscriptionPlan);
    }

    public List<SubscriptionPlan> getSubscriptionPlan() {
        return subscriptionPlanRepo.findAll();
    }

    public SubscriptionPlan getSubscriptionPlan(String subscriptionPlan) {
        return subscriptionPlanRepo.findBySubscriptionPlanId(subscriptionPlan);
    }

    public String deleteSubscriptionPlan(String subscriptionPlanId) {
        subscriptionPlanRepo.deleteById(subscriptionPlanId);
        return "product removed !! " + subscriptionPlanId;
    }

    public SubscriptionPlan updateSubscriptionPlan(SubscriptionPlan subscriptionPlan) {
        SubscriptionPlan existingSubscriptionPlan = subscriptionPlanRepo.findBySubscriptionPlanId(subscriptionPlan.getSubscriptionPlanId());
        existingSubscriptionPlan.setSubscriptionPlanName(subscriptionPlan.getSubscriptionPlanName());
        existingSubscriptionPlan.setSubscriptionPlanDescription(subscriptionPlan.getSubscriptionPlanDescription());
        existingSubscriptionPlan.setSubscriptionPlanPrice(subscriptionPlan.getSubscriptionPlanPrice());
        return subscriptionPlanRepo.save(existingSubscriptionPlan);


    }
}