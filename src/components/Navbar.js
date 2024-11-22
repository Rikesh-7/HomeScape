import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav className={`bg-gray-800 dark:bg-gray-900 text-white px-6 py-4 flex items-center justify-between`}>
      <div className="flex items-center">
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          className="h-10 w-10 mr-2"
        />
        <Link to="/" className="text-xl font-semibold">
          Investment Hub
        </Link>
      </div>

      <div className="flex space-x-6 text-lg items-center">
        <Link to="/" className="hover:text-blue-300 transition duration-200">
          Home
        </Link>
        <Link to="/stocks" className="hover:text-blue-300 transition duration-200">
          Stocks
        </Link>
        <Link to="/pricing" className="hover:text-blue-300 transition duration-200">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-blue-300 transition duration-200">
          Contact
        </Link>
        <Link to="/login" className="hover:text-blue-300 transition duration-200">
          Login
        </Link>
        
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
