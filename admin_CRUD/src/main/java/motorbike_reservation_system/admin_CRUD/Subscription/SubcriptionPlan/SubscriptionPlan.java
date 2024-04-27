package motorbike_reservation_system.admin_CRUD.Subscription.SubcriptionPlan;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="subscription_plan")
public class SubscriptionPlan {

    @Id
    private String subscriptionPlanId;

    private String subscriptionPlanName;

    private String subscriptionPlanDescription;
    private String subscriptionPlanPrice;

    public SubscriptionPlan() {
    }

    public SubscriptionPlan(String subscriptionPlanId, String subscriptionPlanName, String subscriptionPlanDiscription, String subscriptionPlanPrice) {
        this.subscriptionPlanId = subscriptionPlanId;
        this.subscriptionPlanName = subscriptionPlanName;
        this.subscriptionPlanDescription = subscriptionPlanDiscription;
        this.subscriptionPlanPrice = subscriptionPlanPrice;
    }

    public SubscriptionPlan(String subscriptionPlanName, String subscriptionPlanDiscription, String subscriptionPlanPrice) {
        this.subscriptionPlanName = subscriptionPlanName;
        this.subscriptionPlanDescription = subscriptionPlanDiscription;
        this.subscriptionPlanPrice = subscriptionPlanPrice;
    }

    public String getSubscriptionPlanId() {
        return subscriptionPlanId;
    }

    public void setSubscriptionPlanId(String subscriptionPlanId) {
        this.subscriptionPlanId = subscriptionPlanId;
    }

    public String getSubscriptionPlanName() {
        return subscriptionPlanName;
    }

    public void setSubscriptionPlanName(String subscriptionPlanName) {
        this.subscriptionPlanName = subscriptionPlanName;
    }

    public String getSubscriptionPlanDescription() {
        return subscriptionPlanDescription;
    }

    public void setSubscriptionPlanDescription(String subscriptionPlanDescription) {
        this.subscriptionPlanDescription = subscriptionPlanDescription;
    }

    public String getSubscriptionPlanPrice() {
        return subscriptionPlanPrice;
    }

    public void setSubscriptionPlanPrice(String subscriptionPlanPrice) {
        this.subscriptionPlanPrice = subscriptionPlanPrice;
    }

    @Override
    public String toString() {
        return "SubscriptionPlan{" + "subscriptionPlanId=" + subscriptionPlanId + ", subscriptionPlanName=" + subscriptionPlanName + ", subscriptionPlanDescription=" + subscriptionPlanDescription + ", subscriptionPlanPrice=" + subscriptionPlanPrice + '}';
    }

}
