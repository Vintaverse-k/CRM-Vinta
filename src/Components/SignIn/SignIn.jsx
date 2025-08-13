import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Signin.css";
// my-crm-app/src/styles/SignIn.css
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verifyemail");
  };

  return (
    <div className="page-container">
      {/* Left side - Sign In Form */}
      <div className="left-side">
        <form className="signin-box" onSubmit={handleSubmit}>
          <img src="assets/logo.svg" alt="Logo" className="logo" />
          <h2>Sign in to your account</h2>
          <p>Enter your details to login</p>

          <div className="social-login">
            <button type="button">
              <img src="assets/apple.svg" alt="Apple" />
            </button>
            <button type="button">
              <img src="assets/google.svg" alt="Google" />
            </button>
            <button type="button">
              <img src="assets/linkedin.svg" alt="LinkedIn" />
            </button>
          </div>

          <div className="divider">OR</div>

          <div className="input-group">
            <label htmlFor="email">Email</label>

            <img src="assets/email.svg" alt="email icon" className="input-icon-00" />
            <input
              type="email"
              id="email"
              placeholder="hijuyed@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-wrapper">
            <img src="assets/lock.svg" alt="lock icon" className="input-icons-00" />
            <label htmlFor="password">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src="assets/eye.svg"
              alt={showPassword ? "Hide password" : "Show password"}
              onClick={togglePassword}
              className="eye-icon"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Keep me logged in
            </label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <button type="submit" className="signin-btn">
            Sign in
          </button>

          <div className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
          </div>
        </form>
      </div>

      <div className="right-side">
        <div className="background-wrapper">
          <div className="background-image" />
        </div>

        <img
          src="assets/frontsignin.png"
          alt="Total Time Worked"
          className="overlay-image top-image"
        />
        <img
          src="assets/frontsignin2.png"
          alt="Goals by Status"
          className="overlay-image bottom-image"
        />

        <div className="bottom-heading-wrapper">
          <h1 className="bottom-heading">
            Smart Tools for Smart <br />
            Management
          </h1>
          <p className="bottom-heading-01">
            Receive personalized tips and recommendations based on your
            financial goals. Our insights features help you make informed
            decisions.
          </p>
          <div className="dots-wrapper">
            <img src="assets/dots.svg" alt="custom" className="dot-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
