// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import "../style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="nav-item" activeClassName="active">
        🏠 Home
      </NavLink>
      <NavLink to="/explore" className="nav-item" activeClassName="active">
        🔍 Explore
      </NavLink>
      <NavLink to="/messages" className="nav-item" activeClassName="active">
        💬 Messaging
      </NavLink>
      <NavLink to="/create" className="nav-item" activeClassName="active">
        ➕ Create
      </NavLink>
      <NavLink to="/profile" className="nav-item" activeClassName="active">
        👤 Profile
      </NavLink>
      <NavLink to="/settings" className="nav-item" activeClassName="active">
        ⚙️ Settings
      </NavLink>
    </div>
  );
};

export default Sidebar;
