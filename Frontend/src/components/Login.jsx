import React from "react";
import "./style.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-in-box-assis.vercel.app/";
  };
  return (
    <main className="main-login-container">
      <nav className="nav-title">
        <img
          src="/images/reachinbox_ai_logo.jpeg"
          alt=""
          width="30px"
          className="mx-2"
        />
        ReachInBox
      </nav>
      <div className="login-div space-y-6">
        <h1 className="login-title">Create a new account</h1>
        <div className="btn-div space-y-8">
          <button onClick={handleLogin} className="google-btn">
            <FcGoogle className="mr-2" />
            Sign Up with Google
          </button>
          <button className="new-account-btn bg-gradient-to-r from-blue-900 to-blue-600">
            Create an account
          </button>
        </div>
        <h4 className="below-title">
          Already have an account? <a href="">Sign In</a>
        </h4>
      </div>
      <footer className="footer-content">
        &copy; 2023 Reachinbox. All rights reserved
      </footer>
    </main>
  );
};

export default Login;
