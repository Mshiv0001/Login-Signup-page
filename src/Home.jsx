import { useEffect, useState } from "react"; 
import { homeAnimations } from "./animations/HomeAnimations"; 
import Login from "./Login"; 
import SignUp from "./Signup"; 
import "./Home.css"; 

export default function Home() {   // ✅ Capital H
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    homeAnimations();
  }, []);

  return (
    <div className="home-container">
      <img src="/cloud.png" alt="cloud" className="clouds" />
      <img src="/cloud.png" alt="cloud" className="clouds cloud2" />

      <div className="home-content">
        <h1 className="home-title">
          {"Attendance Tracker".split("").map((letter, index) => (
            <span key={index} className={`letter letter-${index}`}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p className="home-subtitle">
          For teachers, students and employees — manage your personal attendance easily.
        </p>

        <div className="home-buttons">
          <button
            className="home-btn login-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>

          <button
            className="home-btn signup-btn"
            onClick={() => setShowSignUp(true)}
          >
            Sign Up
          </button>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
}
