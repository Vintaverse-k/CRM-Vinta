import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/VerifyPassword.css";

const PasswordChanged = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/sidebar");
  };

  return (
    <div className="page-container-05">
      <div className="left-side-05">
        <form className="signin-box-05" onSubmit={handleSubmit}>
          <img src="src/assets/logo.svg" alt="Logo" className="logo-05" />
          <h2>Password Changed</h2>
          <p>Your password has been changed successfully.</p>

          <button type="submit" className="signin-btn-05">
            Back To Home
          </button>
        </form>
      </div>

      <div className="right-side-05">
        <div className="background-wrapper-05">
          <div className="background-image-05" />
        </div>

        <img
          src="src/assets/frontsignin.png"
          alt="Total Time Worked"
          className="overlay-image-05 top-image-05"
        />
        <img
          src="src/assets/frontsignin2.png"
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
            <img
              src="src/assets/dots.svg"
              alt="custom"
              className="dot-image-05"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
