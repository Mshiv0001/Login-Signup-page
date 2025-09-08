import { useState } from "react";
import "./Login.css";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    alert("Login clicked!");
    onClose(); // close modal after login
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
          <button type="submit" className="login-button-google">
            Login with Google
          </button>
          <button type="submit" className="login-button-phone">
            Login with Phone No.
          </button>
          <button type="submit" className="login-button-email">
            Login with Email
          </button>
      </div>
    </div>
  );
}
