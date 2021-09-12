import * as React from "react";
import { useState } from "react";
import {
  input,
  callToAction,
  errorMessage,
  errorBorder,
  correct,
  successMessage,
} from "./layout.module.css";
import validator from "validator";
const InputField = ({ url }) => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const validatePhoneNumber = (e) => {
    e.preventDefault();
    const isValidPhoneNumber = validator.isMobilePhone(number, ["en-GB"]);
    if (!isValidPhoneNumber)
      setError(
        "The number you have entered is not a valid UK phone number. Please try again."
      );
    else {
      setMessage("Message sent");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      window.setTimeout(() => {
        window.location.href = `${url}`;
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setError("");
    setMessage("");
    setNumber(e.target.value);
  };
  return (
    <div>
      <form>
        <div className={input}>
          <div>
            <label htmlFor="number">Your mobile number:</label>
            <input
              type="tel"
              id={error ? errorBorder : correct}
              name="number"
              placeholder="Your mobile number"
              value={number}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <button className={callToAction} onClick={validatePhoneNumber}>
              Text me the link
            </button>
          </div>
        </div>
      </form>
      {error && <div className={errorMessage}>{error}</div>}
      {message && <div className={successMessage}>{message}</div>}
    </div>
  );
};

export default InputField;
