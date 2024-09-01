

import React from 'react';

const ChatCircleText = ({ className }) => {
  return (
    <div className={`chat-circle-text ${className}`}>
      {/* Include the SVG or icon for the chat circle */}
      {/* You can customize the SVG/icon based on your design */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        {/* SVG paths for the chat circle icon */}
      </svg>
      <span>Chat</span>
    </div>
  );
};

export default ChatCircleText;
