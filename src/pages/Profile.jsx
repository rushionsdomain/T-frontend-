// src/pages/Profile.jsx
import { useState } from "react";
import "./Profile.css";

// Dummy data for the profile
const userData = {
  username: "john_doe",
  profilePhoto: "https://via.placeholder.com/150",
  bio: "Just a developer exploring the web! 🌍",
  posts: [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      caption: "Exploring the beach 🏖️",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      caption: "My new setup! 💻",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      caption: "Sunset vibes 🌅",
    },
  ],
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(userData.username);
  const [bio, setBio] = useState(userData.bio);

  // Function to toggle edit mode
  const toggleEdit = () => setIsEditing(!isEditing);

  // Save changes to the profile
  const saveChanges = () => {
    setIsEditing(false); // Exit edit mode
    alert("Profile updated successfully!"); // Placeholder for save logic
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img
          src={userData.profilePhoto}
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-info">
          {isEditing ? (
            <>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="edit-input"
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="edit-input bio-edit"
              />
              <button onClick={saveChanges} className="save-button">
                Save
              </button>
            </>
          ) : (
            <>
              <h2>{username}</h2>
              <p>{bio}</p>
              <button onClick={toggleEdit} className="edit-button">
                Edit Profile
              </button>
            </>
          )}
          <button className="settings-button">Settings</button>
        </div>
      </div>

      {/* User's Posts */}
      <div className="user-posts">
        <h3>Your Posts</h3>
        <div className="posts-grid">
          {userData.posts.map((post) => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt="Post" className="post-image" />
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
