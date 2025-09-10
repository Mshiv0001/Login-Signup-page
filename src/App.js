import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // router imports
import home from "./home";   // Home component
import login from "./login"; // Login component

function App() {
  return (
    <Router> {/* Router wrapper */}
      <Routes> {/* Route definitions */}
        <Route path="/" element={<Home />} />   {/* Home route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </Router>
  );
}

export default App; // export main App
