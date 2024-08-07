import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Onebox from "./components/OneBox";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      setToken(token);
      window.history.replaceState({}, document.title, "/onebox/home");
    } else {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading-div">
        <p className="loading-animation"></p>
        <p className="loading-animation"></p>
        <p className="loading-animation"></p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/onebox/home" element={<Home Id="homePage" />}></Route>
          <Route
            path="/onebox"
            element={token ? <Onebox token={token} /> : <Login />}
          ></Route>
          <Route
            path="/"
            element={token ? <Onebox token={token} /> : <Login />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
