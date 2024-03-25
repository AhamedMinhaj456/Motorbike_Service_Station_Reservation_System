import React, { useState } from 'react';
import './AccountSettingWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const AccountSettingWindow = () => {
  // State to manage account settings
  const [accountSettings, setAccountSettings] = useState({
    // Add your account settings fields here
    notification: true,
    darkMode: false,
    // ...
  });

  const handleAccountSettingsUpdate = (e) => {
    e.preventDefault();
    // Implement logic to update account settings
    console.log('Account settings updated:', accountSettings);
  };

  return (
    <div className="account-setting-window">
      <LeftSidebar />

      <div className="account-setting-content">
        <h2>Account Settings</h2>

        <form className="account-setting-form" onSubmit={handleAccountSettingsUpdate}>
          <label>
            <input
              type="checkbox"
              checked={accountSettings.notification}
              onChange={(e) =>
                setAccountSettings({ ...accountSettings, notification: e.target.checked })
              }
            />
            Receive Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={accountSettings.darkMode}
              onChange={(e) => setAccountSettings({ ...accountSettings, darkMode: e.target.checked })}
            />
            Dark Mode
          </label>

          {/* Add more fields for account settings */}
          
          <button type="submit">Save Settings</button>
        </form>
      </div>

      <RightSidebar />
    </div>
  );
};

export default AccountSettingWindow;
