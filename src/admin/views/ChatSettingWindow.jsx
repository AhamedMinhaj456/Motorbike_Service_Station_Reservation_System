import React, { useState } from 'react';
import './ChatSettingWindow.css';
import LeftSidebar from '../common/LeftSidebar';
import RightSidebar from '../common/RightSidebar';

const ChatSettingWindow = () => {
  // State to manage chat settings
  const [chatSettings, setChatSettings] = useState({
    // Add your chat settings fields here
    notifications: true,
    sound: true,
    // ...
  });

  const handleChatSettingsUpdate = (e) => {
    e.preventDefault();
    // Implement logic to update chat settings
    console.log('Chat settings updated:', chatSettings);
  };

  return (
    <div className="chat-setting-window">
      <LeftSidebar />

      <div className="chat-setting-content">
        <h2>Chat Settings</h2>

        <form className="chat-setting-form" onSubmit={handleChatSettingsUpdate}>
          <label>
            <input
              type="checkbox"
              checked={chatSettings.notifications}
              onChange={(e) =>
                setChatSettings({ ...chatSettings, notifications: e.target.checked })
              }
            />
            Receive Notifications
          </label>

          <label>
            <input
              type="checkbox"
              checked={chatSettings.sound}
              onChange={(e) => setChatSettings({ ...chatSettings, sound: e.target.checked })}
            />
            Enable Sound
          </label>

          {/* Add more fields for chat settings */}
          
          <button type="submit">Save Settings</button>
        </form>
      </div>

      <RightSidebar />
    </div>
  );
};

export default ChatSettingWindow;
