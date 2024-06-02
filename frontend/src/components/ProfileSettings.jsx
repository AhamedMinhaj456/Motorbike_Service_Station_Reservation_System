import React, { useState } from 'react';
import './ProfileSettings.css';

function ProfileSettings() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [headline, setHeadline] = useState('');
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');

  return (
    <div className="profile-settings-container">
      <div className="profile-picture-settings">
        <img src="" alt="Profile" />
        <button>Upload</button>
      </div>
      <div className="personal-details-settings">
        <label>First name</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <label>Last name</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <label>Personal email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button>Change email</button>
      </div>
      <div className="additional-info-settings">
        <label>Headline</label>
        <input 
          type="text" 
          value={headline} 
          onChange={(e) => setHeadline(e.target.value)} 
        />
        <label>Bio</label>
        <textarea 
          value={bio} 
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <div className="social-profiles">
        <label>Website</label>
        <input 
          type="url" 
          value={website} 
          onChange={(e) => setWebsite(e.target.value)} 
        />
        <label>Twitter handle or link</label>
        <input 
          type="url" 
          value={twitter} 
          onChange={(e) => setTwitter(e.target.value)} 
        />
        <label>Linkedin link</label>
        <input 
          type="url" 
          value={linkedin} 
          onChange={(e) => setLinkedin(e.target.value)} 
        />
      </div>
      <div className="security-settings">
        <button>Change password</button>
        <button>Delete account</button>
      </div>
      <button className="profile-settings-save">Save</button>
    </div>
  );
}

export default ProfileSettings;
