// src/pages/LoginPage.jsx
import { Link } from "react-router-dom";
import "../style.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Trendle</h1>

        <form className="form">
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="input"
          />
          <input type="password" placeholder="Password" className="input" />
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
