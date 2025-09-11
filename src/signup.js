import { useState } from "react"; // useState = to manage form inputs
import "./Login.css"; // Reuse the same styles as Login (modal look)

export default function SignUp({ onClose }) { // Functional component with onClose prop
    const [name, setName] = useState(""); // State: full name
    const [user, setUser] = useState(""); // State: email or mobile
    const [password, setPassword] = useState(""); // State: password
    const [confirmPassword, setConfirmPassword] = useState(""); // State: confirm password

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form reload
        if (password !== confirmPassword) { // Check if both passwords match
        alert("Passwords do not match!"); // Show warning
        return; // Stop form submission
        }
        console.log("Name:", name, "User:", user, "Password:", password); // Debug log
        alert("Sign Up clicked!"); // Placeholder success message
        onClose(); // Close modal after signup
    };

    return (
        <div className="login-overlay" onClick={onClose}> {/* Overlay, clicking outside closes modal */}
        <div className="login-box" onClick={(e) => e.stopPropagation()}> {/* Modal box, stops click from bubbling */}
            <button className="close-btn" onClick={onClose}> {/* X button closes modal */}
            &times;
            </button>

            <h2>Sign Up</h2> {/* Modal title */}

            <form className="login-form" onSubmit={handleSubmit}> {/* Signup form */}
            <input
                type="text" // Input for full name
                placeholder="Enter Full Name"
                value={name} // Controlled input
                onChange={(e) => setName(e.target.value)} // Update state
                required // Must be filled
            />
            <input
                type="text" // Input for email or mobile
                placeholder="Enter Email or Mobile Number"
                value={user} // Controlled input
                onChange={(e) => setUser(e.target.value)} // Update state
                required
            />
            <input
                type="password" // Input for password
                placeholder="Enter Password"
                value={password} // Controlled input
                onChange={(e) => setPassword(e.target.value)} // Update state
                required
            />
            <input
                type="password" // Input for confirming password
                placeholder="Confirm Password"
                value={confirmPassword} // Controlled input
                onChange={(e) => setConfirmPassword(e.target.value)} // Update state
                required
            />
            <button type="submit">Sign Up</button> {/* Submit button */}
            </form>
        </div>
        </div>
    );
}
