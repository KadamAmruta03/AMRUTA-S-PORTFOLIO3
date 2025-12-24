// src/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amruta's Portfolio</div>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/projects" className="nav-item">Projects</NavLink>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
      </div>
    </nav>
  );
}
