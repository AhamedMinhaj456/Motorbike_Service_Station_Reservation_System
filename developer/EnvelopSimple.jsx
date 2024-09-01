import React from 'react';

const EnvelopeSimple = ({ color }) => {
  return (
    <div style={{ color: color }}>
      {/* Include the SVG or icon for the envelope */}
      {/* You can customize the SVG/icon based on your design */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        {/* SVG paths for the envelope icon */}
      </svg>
    </div>
  );
};

export default EnvelopeSimple;
