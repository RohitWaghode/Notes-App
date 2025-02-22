import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage("");
      alert("Signup Successful!");
      navigate("/allNotes");
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <div className="signup-form">
        <input
          type="text"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSignup} className="signup-btn">
          Sign Up
        </button>
        <div className="login-link">
          <p>
            Already have an account?{" "}
            <a href="/" className="link">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
