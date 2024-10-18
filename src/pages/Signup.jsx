// src/pages/SignupPage.jsx
import { Link } from "react-router-dom";
import "../style.css";

const SignupPage = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Trendle</h1>

        <p className="info-text">
          Sign up to see photos and videos from your friends.
        </p>

        <form className="form">
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="input"
          />
          <input type="text" placeholder="Full Name" className="input" />
          <input type="text" placeholder="Username" className="input" />
          <input type="password" placeholder="Password" className="input" />
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
