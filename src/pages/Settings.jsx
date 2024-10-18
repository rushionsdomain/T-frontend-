// src/pages/Settings.jsx
import { useState, useEffect } from "react";
import "./Settings.css";

const Settings = ({ user, setUser, toggleTheme, isDarkMode }) => {
  const [profilePhoto, setProfilePhoto] = useState(user.profilePhoto);
  const [bio, setBio] = useState(user.bio);
  const [blockedUsers, setBlockedUsers] = useState(["alice", "bob"]); // Dummy blocked users
  const [likedPosts] = useState(["Beach Trip", "Sunset Vibes"]); // Dummy liked posts

  const handleProfileUpdate = () => {
    setUser((prevUser) => ({
      ...prevUser,
      profilePhoto,
      bio,
    }));
    alert("Profile updated successfully!");
  };

  const handleUnblockUser = (username) => {
    setBlockedUsers(blockedUsers.filter((user) => user !== username));
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Profile Section */}
      <div className="section">
        <h3>Profile</h3>
        <label>Change Profile Photo:</label>
        <input
          type="text"
          placeholder="Enter Image URL"
          value={profilePhoto}
          onChange={(e) => setProfilePhoto(e.target.value)}
        />

        <label>Change Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />

        <button onClick={handleProfileUpdate}>Save Changes</button>
      </div>

      {/* Dark Mode / Light Mode Toggle */}
      <div className="section">
        <h3>Theme</h3>
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          Enable Dark Mode
        </label>
      </div>

      {/* Blocked Users */}
      <div className="section">
        <h3>Blocked Users</h3>
        <ul>
          {blockedUsers.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => handleUnblockUser(user)}>Unblock</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Liked Posts */}
      <div className="section">
        <h3>Liked Posts</h3>
        <ul>
          {likedPosts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
      </div>

      {/* About the App */}
      <div className="section">
        <h3>About the App</h3>
        <p>
          This app is a social media platform that allows users to connect,
          share, and explore content.
        </p>
      </div>
    </div>
  );
};
import PropTypes from "prop-types";

Settings.propTypes = {
  user: PropTypes.shape({
    profilePhoto: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Settings;
