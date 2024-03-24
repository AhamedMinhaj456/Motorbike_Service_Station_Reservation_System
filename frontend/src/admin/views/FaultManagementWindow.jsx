import React, { useState } from 'react';
import './FaultManagementWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const FaultManagementWindow = () => {
  const [faults, setFaults] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `Fault ${index + 1}`,
      options: ['', '', ''],
      associatedModel: '',
      associatedPart: '',
      associatedShop: '',
    }))
  );
  const [bikeModels, setBikeModels] = useState([]);
  const [bikeParts, setBikeParts] = useState([]);
  const [shops, setShops] = useState([]);

  const [editMode, setEditMode] = useState(false);
  const [step, setStep] = useState(1);

  const handleAddBikeModel = () => {
    setBikeModels([...bikeModels, { id: bikeModels.length + 1, name: '' }]);
  };

  const handleAddBikePart = () => {
    setBikeParts([...bikeParts, { id: bikeParts.length + 1, name: '' }]);
  };

  const handleAddShop = () => {
    setShops([...shops, { id: shops.length + 1, name: '' }]);
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleInputChange = (id, field, value) => {
    setFaults((prevFaults) =>
      prevFaults.map((fault) => (fault.id === id ? { ...fault, [field]: value } : fault))
    );
  };

  const handleSave = () => {
    setEditMode(false);
    alert('Faults saved!');
  };

  return (
    <div className="fault-management">
      <LeftSidebar />

      <div className="fault-management-content">
        {step === 1 && (
          <div>
            <h2>Enter Bike Models</h2>
            {bikeModels.map((model) => (
              <div key={model.id}>
                <input
                  type="text"
                  value={model.name}
                  onChange={(e) => handleInputChange(model.id, 'name', e.target.value)}
                />
              </div>
            ))}
            <button onClick={handleAddBikeModel}>Add Model</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Enter Bike Parts</h2>
            {bikeParts.map((part) => (
              <div key={part.id}>
                <input
                  type="text"
                  value={part.name}
                  onChange={(e) => handleInputChange(part.id, 'name', e.target.value)}
                />
              </div>
            ))}
            <button onClick={handleAddBikePart}>Add Part</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Enter Shops</h2>
            {shops.map((shop) => (
              <div key={shop.id}>
                <input
                  type="text"
                  value={shop.name}
                  onChange={(e) => handleInputChange(shop.id, 'name', e.target.value)}
                />
              </div>
            ))}
            <button onClick={handleAddShop}>Add Shop</button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Fault Category Management</h2>
            {faults.map((fault) => (
              <div key={fault.id} className="fault-item">
                <form className="fault-form">
                  <label>{`Fault ${fault.id}:`}</label>
                  <input
                    type="text"
                    value={fault.name}
                    onChange={(e) => handleInputChange(fault.id, 'name', e.target.value)}
                    readOnly={!editMode}
                  />
                  <br />
                  {fault.options.map((option, index) => (
                    <div key={index}>
                      <label>{`Option ${index + 1}:`}</label>
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleInputChange(fault.id, `options[${index}]`, e.target.value)}
                        readOnly={!editMode}
                      />
                      <br />
                    </div>
                  ))}
                  <label>Associated Bike Model:</label>
                  <select
                    value={fault.associatedModel}
                    onChange={(e) => handleInputChange(fault.id, 'associatedModel', e.target.value)}
                    disabled={!editMode}
                  >
                    <option value="">Select a model...</option>
                    {bikeModels.map((model) => (
                      <option key={model.id} value={model.id}>{model.name}</option>
                    ))}
                  </select>
                  <br />
                  <label>Associated Bike Part:</label>
                  <select
                    value={fault.associatedPart}
                    onChange={(e) => handleInputChange(fault.id, 'associatedPart', e.target.value)}
                    disabled={!editMode}
                  >
                    <option value="">Select a part...</option>
                    {bikeParts.map((part) => (
                      <option key={part.id} value={part.id}>{part.name}</option>
                    ))}
                  </select>
                  <br />
                  <label>Associated Shop:</label>
                  <select
                    value={fault.associatedShop}
                    onChange={(e) => handleInputChange(fault.id, 'associatedShop', e.target.value)}
                    disabled={!editMode}
                  >
                    <option value="">Select a shop...</option>
                    {shops.map((shop) => (
                      <option key={shop.id} value={shop.id}>{shop.name}</option>
                    ))}
                  </select>
                </form>
              </div>
            ))}
            <div className="fault-management-buttons">
              <button
                className={`edit-button ${editMode ? 'active' : ''}`}
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? 'Cancel' : 'Edit'}
              </button>
              <button className="save-button" onClick={handleSave} disabled={!editMode}>
                Save
              </button>
            </div>
          </div>
        )}

        {step < 4 && (
          <div className="fault-management-buttons">
            <button onClick={handleNextStep}>Next</button>
          </div>
        )}
      </div>

      <RightSidebar />
    </div>
  );
};

export default FaultManagementWindow;
