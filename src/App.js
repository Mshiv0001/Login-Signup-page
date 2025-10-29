import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./Home";   // Home component
import Login from "./Login";
import Signup from "./signup";
 // Login component

function App() {
  return (
    <Router basename="/Login-Signup-page"> {/* must match your GitHub repo name */}
      <Routes>
        <Route path="/" element={<Home />} />   {/* Home route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </Router>
  );
}

export default App;
