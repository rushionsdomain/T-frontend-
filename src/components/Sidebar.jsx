// import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Add your styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/feed" className="sidebarItem">
        🏠 Home
      </Link>
      <Link to="/explore" className="sidebarItem">
        🔍 Explore
      </Link>
      <Link to="/messages" className="sidebarItem">
        💬 Messages
      </Link>
      <Link to="/notifications" className="sidebarItem">
        🔔 Notifications
      </Link>
      <Link to="/create-post" className="sidebarItem">
        ➕ Create Post
      </Link>
      <Link to="/profile" className="sidebarItem">
        👤 Profile
      </Link>
    </div>
  );
};

export default Sidebar;
