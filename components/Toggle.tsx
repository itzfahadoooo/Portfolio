import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check the initial theme from local storage or default to light
    const initialTheme = localStorage.getItem("theme") || "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md focus:outline-none border border-gray-400"
      aria-label="Toggle theme"
      style={{ position: "absolute", right: "1rem", top: "1rem" }}
    >
      {theme === "light" ? (
        <FaMoon className="text-silver text-2xl" />
      ) : (
        <FaSun className="text-silver text-2xl" />
      )}
    </button>
  );
};

export default Toggle;