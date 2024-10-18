// src/pages/ForgotPassPage.jsx
import { Link } from "react-router-dom";
import "../style.css";

const ForgotPassPage = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Reset Password</h1>

        <p className="info-text">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>

        <form className="form">
          <input type="email" placeholder="Email" className="input" />
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
