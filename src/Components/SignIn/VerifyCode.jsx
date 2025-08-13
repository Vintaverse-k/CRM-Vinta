import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/VerifyCode.css";

const VerifyCode = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (!/^[0-9]?$/.test(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/verifypassword"); 
  };

  const handleResend = () => {
    alert("Resend code triggered");
  };

  return (
    <div className="page-container-04">
      <div className="left-side-04">
        <form className="signin-box-04" onSubmit={handleSubmit}>
          <img src="assets/logo.svg" alt="Logo" className="logo-04" />
          <h2>Enter Your Code</h2>
          <p>Please enter the 6-digit code sent to your email.</p>

          {/* OTP inputs */}
          <div className="otp-input-group-04">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input-04"
                value={value}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                required
              />
            ))}
          </div>

          <button type="submit" className="signin-btn-04">
            Submit
          </button>

          <p className="resend-text-04">
            Didn't receive code?{" "}
            <button
              type="button"
              className="resend-btn-04"
              onClick={handleResend}
            >
              Resend
            </button>
          </p>
        </form>
      </div>

      <div className="right-side-04">
        <div className="background-wrapper-04">
          <div className="background-image-04" />
        </div>

        <img
          src="assets/frontsignin.png"
          alt="Total Time Worked"
          className="overlay-image-04 top-image-04"
        />
        <img
          src="assets/frontsignin2.png"
          alt="Goals by Status"
          className="overlay-image-04 bottom-image-04"
        />

        <div className="bottom-heading-wrapper-04">
          <h1 className="bottom-heading-04">
            Smart Tools for Smart <br />
            Management
          </h1>
          <p className="bottom-heading-01-04">
            Receive personalized tips and recommendations based on your
            financial goals. Our insights features help you make informed
            decisions.
          </p>
          <div className="dots-wrapper-04">
            <img src="assets/dots.svg" alt="custom" className="dot-image-04" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
