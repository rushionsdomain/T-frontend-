// src/pages/LoginPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch(
        "https://phase4-final-project-10.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      // Store the token in localStorage or state management
      localStorage.setItem("token", data.access_token);
      navigate("/home"); // Redirect to home page after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Trendle</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="button">
            Log in
          </button>
        </form>

        <p className="forgot">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>

        <div className="signup-text">
          <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
