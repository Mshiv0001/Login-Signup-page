import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./home";   // Home component
import Login from "./login"; // Login component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Home route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
      </Routes>
    </Router>
  );
}

export default App;
