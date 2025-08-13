import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/SignUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="page-container-02">
      <div className="left-side-02">
        <form className="signin-box-02" onSubmit={handleSubmit}>
          <img src="src/assets/logo.svg" alt="Logo" className="logo-02" />
          <h2>Sign up for your account</h2>
          <p>Enter your details to create your account</p>

          <div className="social-login-02">
            <button type="button">
              <img src="src/assets/apple.svg" alt="Apple" />
            </button>
            <button type="button">
              <img src="/srcassets/google.svg" alt="Google" />
            </button>
            <button type="button">
              <img src="src/assets/linkedin.svg" alt="LinkedIn" />
            </button>
          </div>

          <div className="divider-02">OR</div>

          <div className="input-group-02">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="input-group-02">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="hijuyed@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group-02 password-wrapper-02">
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
              src="src/assets/eye.svg"
              alt={showPassword ? "Hide password" : "Show password"}
              onClick={togglePassword}
              className="eye-icon-02"
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* Terms & Privacy */}
          <div className="options-02">
            <label>
              I agree to the Taskbito{" "}
              <a href="#terms" className="purple-link-02">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#privacy" className="purple-link-02">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className="signin-btn-02">
            Sign up
          </button>

          <div className="signup-text-02">
            Already have an account?{" "}
            <Link to="/" className="login-link">
              Login
            </Link>
          </div>
        </form>
      </div>

      <div className="right-side-02">
        <div className="background-wrapper-02">
          <div className="background-image-02" />
        </div>

        <img
          src="src/assets/frontsignin.png"
          alt="Total Time Worked"
          className="overlay-image-02 top-image-02"
        />
        <img
          src="src/assets/frontsignin2.png"
          alt="Goals by Status"
          className="overlay-image-02 bottom-image-02"
        />

        <div className="bottom-heading-wrapper-02">
          <h1 className="bottom-heading-02">
            Smart Tools for Smart <br />
            Management
          </h1>
          <p className="bottom-heading-01-02">
            Receive personalized tips and recommendations based on your financial
            goals. Our insights features help you make informed decisions.
          </p>
          <div className="dots-wrapper-02">
            <img src="src/assets/dots.svg" alt="custom" className="dot-image-02" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
