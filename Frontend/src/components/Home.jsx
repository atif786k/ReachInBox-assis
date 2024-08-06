import React, { useState } from "react";
import Theme from "./Theme";
import "./style.css";
import { IoMdHome, IoMdContact, IoMdMail, IoMdMenu } from "react-icons/io";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className={`home-container ${theme}`}>
      <nav className="side-nav">
        <img src="/images/reachinbox_ai_logo.jpeg" width="50px" alt="" />
        <ul className="side-nav-items space-y-12">
          <li>
            <Link to="/onebox/home">
              <IoMdHome className="hover:text-gray-400" />
            </Link>
          </li>
          <li>
            <IoMdContact className="hover:text-gray-400" />
          </li>
          <li>
            <IoMdMail className="hover:text-gray-400" />
          </li>
          <li>
            <PiPaperPlaneTiltFill className="hover:text-gray-400" />
          </li>
          <li>
            <IoMdMenu className="hover:text-gray-400" />
          </li>
          <li>
            <Link to="/onebox">
              <FaInbox className="hover:text-gray-400" />
            </Link>
          </li>
        </ul>
        <p className="user-profile-initials">AS</p>
      </nav>
      <div className="horizontal-div">
        <nav className="upper-nav">
          <h2>Onebox</h2>
          <h2 className="flex items-center">
            <Theme theme={theme} toggleTheme={toggleTheme} />
            Atif's Workspace
          </h2>
        </nav>
        <div className="home-container-content mt-40 flex flex-col items-center justify-center space-y-8">
          <img src="/images/i-CYtC7ziR.svg" />
          <h1 className="text-2xl font-bold">
            It’s the beginning of a legendary sales pipeline
          </h1>
          <h4>When you have inbound E-mails you’ll see them here</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
