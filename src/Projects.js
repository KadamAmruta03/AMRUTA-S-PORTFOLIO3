import React, { useState } from "react";
import "./Projects.css";
import "./App.css";

const allProjects = [
  {
    title: "Blood Donation App",
    desc: "App for managing donors, tracking donations, and location-based alerts.",
    tech: ["HTML/CSS", "JavaScript", "Full Stack","Google Apps Script "],
    category: ["HTML/CSS", "JavaScript","Full Stack","Google Apps Script"],
     link: 'https://blooddonation-kappa.vercel.app/index.html' 
  },
  
  {
    title: "Evra Jewelry E-commerce Website",
    desc: "Responsive jewelry e-commerce platform with product gallery and cart integration.",
    tech: ["HTML/CSS", "JavaScript", "React.js","Full Stack"],
    category: ["HTML/CSS", "JavaScript", "React.js","Full Stack","E-commerce"],
    link: 'https://evra-jewlry.vercel.app/' 
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Stack", "E-commerce", "Data Analytics", "HTML/CSS", "JavaScript", "React.js","Node.js","PhpMyAdmin","MySQL","XAMPP","Chart.js","Google Apps Script"];

  const filteredProjects =
  selectedCategory === "All"
    ? allProjects
    : allProjects.filter((p) => p.category.includes(selectedCategory));

  return (
    <div className="background-section"> {/* ✅ Uses global background */}
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>

        {/* FILTER BUTTONS */}
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              
              <p>{project.desc}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <button
  className="view-btn"
  onClick={() => window.open(project.link, "_blank")}
>
  View
</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


