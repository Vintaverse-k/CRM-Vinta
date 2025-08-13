import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/VerifyEmail.css";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verifycode");
  };

  return (
    <div className="page-container-03">
      <div className="left-side-03">
        <form className="signin-box-03" onSubmit={handleSubmit}>
          <img src="assets/logo.svg" alt="Logo" className="logo-03" />
          <h2>Verify Your Email</h2>
          <p>Please enter your Email details to Forgot Password</p>

          <div className="input-group-03">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper-03">
              <img src="assets/email.svg" alt="email icon" className="input-icon-03" />
              <input
                type="email"
                id="email"
                placeholder="hijuyed@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="signin-btn-03">
            Submit
          </button>
        </form>
      </div>

      <div className="right-side-03">
        <div className="background-wrapper-03">
          <div className="background-image-03" />
        </div>

        <img
          src="assets/frontsignin.png"
          alt="Total Time Worked"
          className="overlay-image-03 top-image-03"
        />
        <img
          src="assets/frontsignin2.png"
          alt="Goals by Status"
          className="overlay-image-03 bottom-image-03"
        />

        <div className="bottom-heading-wrapper-03">
          <h1 className="bottom-heading-03">
            Smart Tools for Smart <br />
            Management
          </h1>
          <p className="bottom-heading-01-03">
            Receive personalized tips and recommendations based on your
            financial goals. Our insights features help you make informed
            decisions.
          </p>
          <div className="dots-wrapper-03">
            <img src="assets/dots.svg" alt="custom" className="dot-image-03" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
