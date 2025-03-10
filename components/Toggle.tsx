import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Toggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check the initial theme from local storage or default to dark
    const initialTheme = localStorage.getItem("theme") || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md focus:outline-none border border-gray-400"
      aria-label="Toggle theme"
      // style={{ position: "absolute", right: "1rem", top: "1rem" }}
    >
      {theme === "light" ? (
        <FaMoon className="text-silver text-2xl" />
      ) : (
        <FaMoon className="text-silver text-2xl rotate-180" />
      )}
    </button>
  );
};

export default Toggle;