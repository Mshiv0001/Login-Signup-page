import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // router imports
import home from "./home";   // Home component
import login from "./login"; // Login component

function App() {
  return (
    <Router> {/* Router wrapper */}
      <Routes> {/* Route definitions */}
        <Route path="/" element={<home />} />   {/* Home route */}
        <Route path="/login" element={<login />} /> {/* Login route */}
      </Routes>
    </Router>
  );
}

export default App; // export main App
