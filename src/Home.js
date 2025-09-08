import { useEffect, useState } from "react";
import { homeAnimations } from "./animations/HomeAnimations";
import Login from "./Login"; // import your login component
import "./Home.css";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    homeAnimations(); // run GSAP animations when page loads
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          {"Attendance Tracker ".split("").map((letter, index) => (
            <span key={index} className={`letter letter-${index}`}>
              {letter === " " ? "\u00A0" : letter} {/* keep spaces */}
            </span>
          ))}
        </h1>

        <p className="home-subtitle">
          For teachers, students and employees — manage your personal attendance easily.
        </p>

        <div className="home-buttons">
          <button
            className="home-btn login-btn"
            onClick={() => setShowLogin(true)} // open modal
          >
            Login  
          </button>
          <button
            className="home-btn signup-btn"
            onClick={() => alert("Sign Up clicked!")} // keep as example
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Render login modal only when showLogin is true */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
}
