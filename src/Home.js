import { useEffect, useState } from "react"; // React hooks: useState = manage state, useEffect = run side effects
import { homeAnimations } from "./animations/HomeAnimations"; // Import GSAP animation function for homepage
import Login from "./login"; // Import Login modal component
import SignUp from "./signup"; // Import SignUp modal component
import "./home.css"; // Import CSS styles for this component

export default function Home() {
  const [showLogin, setShowLogin] = useState(false); // State: controls if Login modal is visible
  const [showSignUp, setShowSignUp] = useState(false); // State: controls if SignUp modal is visible

  useEffect(() => {
    homeAnimations(); // Run entrance animations (letters, clouds, etc.) once on mount
  }, []);

  return (
    <div className="home-container"> {/* Main container wrapping homepage */}

      <img src="/cloud.png" alt="cloud" className="clouds" /> {/* Cloud image for background */}
      <img src="/cloud.png" alt="cloud" className="clouds cloud2" /> {/* Second cloud image */}

      <div className="home-content"> {/* Content block containing title, subtitle, and buttons */}

        <h1 className="home-title">
          {/* Split "Attendance Tracker" into letters so each can be animated separately */}
          {"Attendance Tracker".split("").map((letter, index) => (
            <span key={index} className={`letter letter-${index}`}>
              {letter === " " ? "\u00A0" : letter} {/* Replace spaces with non-breaking space */}
            </span>
          ))}
        </h1>

        <p className="home-subtitle">
          For teachers, students and employees — manage your personal attendance easily. {/* Subtitle text */}
        </p>

        <div className="home-buttons"> {/* Buttons container */}
          <button
            className="home-btn login-btn"
            onClick={() => setShowLogin(true)} // Show Login modal when clicked
          >
            Login
          </button>

          <button
            className="home-btn signup-btn"
            onClick={() => setShowSignUp(true)} // Show SignUp modal when clicked
          >
            Sign Up
          </button>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />} {/* Conditionally render Login modal */}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />} {/* Conditionally render SignUp modal */}
    </div>
  );
}
