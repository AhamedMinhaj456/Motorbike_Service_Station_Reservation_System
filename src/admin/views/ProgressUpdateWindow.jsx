import React, { useState } from 'react';
import './ProgressUpdateWindow.css'; 
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const ProgressUpdateWindow = () => {

  return (
    <div className="progress-update-main">
      <LeftSidebar />
      <div className="progress-update-management">
        <h2>Progress Update</h2>
        

      <div className="progress-update-management-content">
      
       
        <div className="topic-1">
        <p className="tt-1">Reservation ID</p>      
        </div>
        <select className="dropID">
              <option value="">Select ID</option>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </select>

            <button className="next-button"  >
            Next
          </button>

            <div className="topic-1">
        <p className="tt-2">Reservation Schedule <br/> Your appointment is Scheduled for: </p>      
        </div>
  
        <div className="set-1">
          <p className="tt-3"> Date</p>
          <p className="tt-4">XXXXXXXXXXXX</p>
        </div>
        <div className="set-1">
          <p className="tt-5">Time</p>
          <p className="tt-6">XXXXXXXXXXXX</p>
        </div>
        <div className="set-1">
          <p className="tt-7">Service Location</p>
          <p className="tt-8">XXXXXXXXXXXX</p>
        </div>

        <button className="next-button"  >
            Next
          </button>

        <div className="topic-1">
        <p className="tt-9">Progress Tracker </p>      
        </div>
        
        <div className="progress-tracker">
            <div className="progress-bar-container">
            <div className="progress-bar">
  <div className="progress-segment-container">
    <div className="progress-segment inspection">Inspection</div>
    <div className="progress-segment repairs">Repairs</div>
    <div className="progress-segment quality-check">Quality Check</div>
  </div>
</div>
            </div>
            </div>
        

        <button className="save-button"  >
            Save
          </button>       
      
    </div>
    </div>
      <RightSidebar />
    </div>
  );
};

export default ProgressUpdateWindow;



