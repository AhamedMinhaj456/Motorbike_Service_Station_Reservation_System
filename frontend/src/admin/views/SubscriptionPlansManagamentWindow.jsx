import React, { useState } from 'react';
import './SubscriptionPlansmanagementWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const SubscriptionPlansManagementWindow = () => {
  const [plans, setPlans] = useState([
    { id: 1, name: 'Plan 1', description: '', price: '', selected: false },
    { id: 2, name: 'Plan 2', description: '', price: '', selected: false },
    { id: 3, name: 'Plan 3', description: '', price: '', selected: false },
  ]);

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (id, field, value) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) => (plan.id === id ? { ...plan, [field]: value } : plan))
    );
  };

  const handleSave = () => {
    setEditMode(false);
    alert('Plans saved!');
  };

  return (
    <div className="subscription-plans-management">
      <LeftSidebar />

      <div className="subscription-plans-management-content">
        <h2 className='subscription-management-heading'>Subscription Plans Management</h2>

        {/* Render the plans' forms */}
        {plans.map((plan) => (
          <div key={plan.id} className="plan-item">
            <label>
              <input
                type="checkbox"
                checked={plan.selected}
                onChange={() =>
                  setPlans((prevPlans) =>
                    prevPlans.map((p) => (p.id === plan.id ? { ...p, selected: !p.selected } : p))
                  )
                }
              />
              {plan.name}
            </label>
            {plan.selected && (
              <form className="plan-form">
                <label>{`Plan ${plan.id} Name:`}</label>
                <input
                  type="text"
                  value={plan.name}
                  onChange={(e) => handleInputChange(plan.id, 'name', e.target.value)}
                  readOnly={!editMode}
                />
                <br />
                <label>Description:</label>
                <input
                  type="text"
                  value={plan.description}
                  onChange={(e) => handleInputChange(plan.id, 'description', e.target.value)}
                  readOnly={!editMode}
                />
                <br />
                <label>Price:</label>
                <input
                  type="text"
                  value={plan.price}
                  onChange={(e) => handleInputChange(plan.id, 'price', e.target.value)}
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
