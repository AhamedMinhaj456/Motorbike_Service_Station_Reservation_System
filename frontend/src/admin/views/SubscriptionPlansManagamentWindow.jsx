import React, { useState } from 'react';
import './SubscriptionPlansmanagementWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';
import axios from 'axios';

const SubscriptionPlansManagementWindow = () => {
  const [plans, setPlans] = useState([
    { subscriptionPlanId: 1, subscriptionPlanName: 'Plan 1', subscriptionPlanDescription: '', subscriptionPlanPrice: '', selected: false },
    { subscriptionPlanId: 2, subscriptionPlanName: 'Plan 2', subscriptionPlanDescription: '', subscriptionPlanPrice: '', selected: false },
    { subscriptionPlanId: 3, subscriptionPlanName: 'Plan 3', subscriptionPlanDescription: '', subscriptionPlanPrice: '', selected: false },
  ]);

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (id, field, value) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) => (plan.subscriptionPlanId === id ? { ...plan, [field]: value } : plan))
    );
  };

  // Backend connection: Function to save plans to the backend
  const handleSave = () => {
    setEditMode(false);
    // Backend developer: Add code here to send plans to the backend and save them
    // Example:
    axios.post('http://localhost:8096/subscriptionPlan/addSubscriptionPlan', plans)
      .then(response => {
        alert('Plans saved!');
      })
      .catch(error => {
        console.error('Error saving plans:', error);
        alert('Failed to save plans. Please try again.');
      });
  };

  return (
    <div className="subscription-plans-management">
      <LeftSidebar />

      <div className="subscription-plans-management-content">
        <h2 className='subscription-management-heading'>Subscription Plans Management</h2>

        {/* Render the plans' forms */}
        {plans.map((plan) => (
          <div key={plan.subscriptionPlanId} className="plan-item">
            <label>
              <input
                type="checkbox"
                checked={plan.selected}
                onChange={() =>
                  setPlans((prevPlans) =>
                    prevPlans.map((p) => (p.subscriptionPlanId === plan.subscriptionPlanId ? { ...p, selected: !p.selected } : p))
                  )
                }
              />
              {plan.subscriptionPlanName}
            </label>
            {plan.selected && (
              <form className="plan-form">
                <label>{`Plan ${plan.subscriptionPlanId} Name:`}</label>
                <input
                  type="text"
                  value={plan.subscriptionPlanName}
                  onChange={(e) => handleInputChange(plan.subscriptionPlanId, 'subscriptionPlanName', e.target.value)}
                  readOnly={!editMode}
                />
                <br />
                <label>Description:</label>
                <input
                  type="text"
                  value={plan.subscriptionPlanDescription}
                  onChange={(e) => handleInputChange(plan.subscriptionPlanId, 'subscriptionPlanDescription', e.target.value)}
                  readOnly={!editMode}
                />
                <br />
                <label>Price:</label>
                <input
                  type="text"
                  value={plan.subscriptionPlanPrice}
                  onChange={(e) => handleInputChange(plan.subscriptionPlanId, 'subscriptionPlanPrice', e.target.value)}
                  readOnly={!editMode}
                />
              </form>
            )}
          </div>
        ))}

        <div className="subscription-plans-management-buttons">
          <button
            className={`edit-button ${editMode ? 'active' : ''}`}
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
          <button className="save-button" onClick={handleSave} disabled={!editMode}>
            Save
          </button>
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default SubscriptionPlansManagementWindow;
