import React from "react";
import "../App.css";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Theme = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
};

export default Theme;
