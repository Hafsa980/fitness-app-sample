import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Verification.css";

function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(""); // State for error handling
  const expectedCode = "1234"; // Replace with actual verification logic
  const navigate = useNavigate(); // For redirection

  const handleChange = (element, index) => {
    const value = element.value;
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      // Focus on the next input
      if (element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");

    // Check if the entered code matches the expected code
    if (enteredCode === expectedCode) {
      console.log("Verification Successful");
      navigate("/dashboard"); // Redirect to the desired page on success
    } else {
      setError("Incorrect verification code. Please try again.");
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-box">
        <h1>Verification Code</h1>
        {error && <p className="error-message">{error}</p>} {/* Display error if code is incorrect */}
        <form onSubmit={handleSubmit}>
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
              />
            ))}
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Verification;
