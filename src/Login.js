import { useState } from "react"; // useState = to manage input values
import "./login.css"; // Import styles for the login modal

export default function Login({ onClose }) { // Functional component, receives onClose prop to close modal
  const [user, setUser] = useState(""); // State: stores email or mobile input
  const [password, setPassword] = useState(""); // State: stores password input

  const handleSubmit = (e) => { 
    e.preventDefault(); // Prevent page reload on form submit
    console.log("User:", user, "Password:", password); // Debug log
    alert("Login clicked!"); // Show simple alert (placeholder for real login logic)
    onClose(); // Call parent’s close function to hide modal
  };

  return (
    <div className="login-overlay" onClick={onClose}> {/* Dark overlay, clicking closes modal */}
      <div className="login-box" onClick={(e) => e.stopPropagation()}> {/* Box content, stop click from closing */}
        <button className="close-btn" onClick={onClose}> {/* X button closes modal */}
          &times;
        </button>

        <h2>Login</h2> {/* Modal title */}

        <form className="login-form" onSubmit={handleSubmit}> {/* Form wrapper */}
          <input
            type="text" // Input for email or mobile
            placeholder="Enter Email or Mobile Number"
            value={user} // Controlled by user state
            onChange={(e) => setUser(e.target.value)} // Update state on typing
            required // Cannot be empty
          />
          <input
            type="password" // Input for password
            placeholder="Enter Password"
            value={password} // Controlled by password state
            onChange={(e) => setPassword(e.target.value)} // Update state on typing
            required // Cannot be empty
          />
          <button type="submit">Login</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
}
