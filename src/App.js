import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StockPage from "./pages/StockPage";
import Pricing from "./pages/Pricing";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className={`min-h-screen ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stocks" element={<StockPage />} />
            <Route path="/pricing" element={<Pricing />} /> {/* Pricing Route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
