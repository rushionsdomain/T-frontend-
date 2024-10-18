// src/pages/ForgotPassPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const ForgotPassPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const response = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Error sending reset link");
      }

      setMessage("Reset link sent! Please check your email.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Reset Password</h1>

        <p className="info-text">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}
          {message && <p className="success-text">{message}</p>}
          <button type="submit" className="button">
            Send Reset Link
          </button>
        </form>

        <p className="login-text">
          <Link to="/">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassPage;
