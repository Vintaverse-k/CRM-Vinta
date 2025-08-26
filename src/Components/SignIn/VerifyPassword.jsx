import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/VerifyPassword.css";

const VerifyPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/passwordchanged");
  };

  return (
    <div className="page-container-05">
      <div className="left-side-05">
        <form className="signin-box-05" onSubmit={handleSubmit}>
          <img src="assets/logo.svg" alt="Logo" className="logo-05" />
          <h2>Create a new Password</h2>
          <p>Must be at least 8 characters.</p>

          <div className="input-group-05 password-wrapper-05">
            <label htmlFor="new-password">New Password</label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="new-password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <img
              src="assets/eye.svg"
              alt="Toggle visibility"
              className="eye-icon-05"
              onClick={() => setShowNewPassword(!showNewPassword)}
            />
          </div>

          <div className="input-group-05 password-wrapper-05">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <img
              src="assets/eye.svg"
              alt="Toggle visibility"
              className="eye-icon-05"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          <button type="submit" className="signin-btn-05">
            Submit
          </button>

          <p className="help-text-05">
            Need help? <a href="mailto:support@example.com">Contact us</a>
          </p>
        </form>
      </div>

      <div className="right-side-05">
        <div className="background-wrapper-05">
          <div className="background-image-05" />
        </div>

        <img
          src="assets/frontsignin.png"
          alt="Total Time Worked"
          className="overlay-image-05 top-image-05"
        />
        <img
          src="assets/frontsignin2.png"
          alt="Goals by Status"
          className="overlay-image-05 bottom-image-05"
        />

        <div className="bottom-heading-wrapper-05">
          <h1 className="bottom-heading-05">
            Smart Tools for Smart <br />
            Management
          </h1>
          <p className="bottom-heading-01-05">
            Receive personalized tips and recommendations based on your
            financial goals. Our insights features help you make informed
            decisions.
          </p>
          <div className="dots-wrapper-05">
            <img src="assets/dots.svg" alt="custom" className="dot-image-05" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPassword;
