// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Logo from "./Logo";
import "./App.css";

export default function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Show logo for 3 seconds (2s typing + 1s pause)
    const timer = setTimeout(() => setShowLogo(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showLogo) {
    return <Logo />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
