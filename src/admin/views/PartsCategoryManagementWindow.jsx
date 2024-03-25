import React, { useState } from 'react';
import './PartsCategoryManagementWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const PartsCategoryManagementWindow = () => {
  const [showPopover, setShowPopover] = useState(false);

  const handleInsertButtonClick = () => {
    setShowPopover(!showPopover); // Toggle the state
  };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
     };

  return (
    <div className="parts-Category-main">
      <LeftSidebar />
      <div className="parts-category-management">
        <h2>Parts Category Management</h2>

      <div className="parts-category-management-content">
      <div className="category-1">
        <div className="title-1">
        <p className="text-1">1). Part 1</p>
        <p className="text-2">Brand 01</p>
        </div>
        <div className="group-1">
          <p className="text-3">Item 01</p>
          <p className="text-4">XXXXXXXXXXXX</p>
        </div>
        <div className="group-2">
          <p className="text-5">Item 02</p>
          <p className="text-6">XXXXXXXXXXXX</p>
        </div>
        </div>


        <button className="insert-button" onClick={handleInsertButtonClick}>Insert</button>

        {showPopover && (
  <div className="popover">
    <div className="popover-content">
      <div className="popover-header-container">
      <div className="popover-header">Item Details</div>
        <button className="popover-close-button">&times;</button>
      </div>
      <div className="popover-body">
        <select className="dropdownpop">
          <option value="">Part 1</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
        <select className="dropdownpop">
          <option value="">Brand</option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
        <div className="input-wrapper">
          <input type="text" placeholder="price" />
        </div>
        <div className="input-wrapper">
          <input type="text" placeholder="Description" />
        </div>
        <div className="upload-wrapper">
          <input type="file" onChange={handleFileChange} accept="image/*" />
          {selectedFile && (
            <div>
              <p>Selected Image:</p>
              <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
            </div>
          )}
        </div>
        <button className="popover-button">Save</button>
      </div>
    </div>
  </div>
)}


      
    </div>
    </div>
      <RightSidebar />
    </div>
  );
};

export default PartsCategoryManagementWindow;



