// src/pages/SignupPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch(
        "https://phase4-final-project-10.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, fullName, username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      await response.json();
      navigate("/"); // Redirect to login after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Trendle</h1>

        <p className="info-text">
          Sign up to see photos and videos from your friends.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* <input
            type="text"
            placeholder="Full Name"
            className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          /> */}
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            Sign up
          </button>
        </form>

        <p className="login-text">
          <Link to="/">Have an account? Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
