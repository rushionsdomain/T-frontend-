// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ForgotPassPage from "./pages/Forgot";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar"; // Import Sidebar component
import "./style.css";

const App = () => {
  const [user, setUser] = useState({
    username: "john_doe",
    profilePhoto: "https://via.placeholder.com/150",
    bio: "Just a developer!",
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <Router>
        <Routes>
          {/* Auth routes without sidebar */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassPage />} />

          {/* Routes with sidebar */}
          <Route
            path="/home"
            element={
              <div className="main-layout">
                <Sidebar user={user} />
                <Home />
              </div>
            }
          />
          <Route
            path="/explore"
            element={
              <div className="main-layout">
                <Sidebar user={user} />
                <Explore />
              </div>
            }
          />
          <Route
            path="/messages"
            element={
              <div className="main-layout">
                <Sidebar user={user} />
                <Messages />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="main-layout">
                <Sidebar user={user} />
                <Profile user={user} setUser={setUser} />
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="main-layout">
                <Sidebar user={user} />
                <Settings
                  user={user}
                  setUser={setUser}
                  toggleTheme={toggleTheme}
                  isDarkMode={isDarkMode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
