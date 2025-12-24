import React from "react";
import "./Home.css";
import amruImg from "./Images/amru.jpg"; // ✅ Added image import

function Home() {
  return (
    <div className="background-section">
      <div className="home-container">
        {/* ---------- TOP SECTION ---------- */}
        <div className="top-section">
          {/* LEFT SIDE */}
          <div className="left-section">
            <img src={amruImg} alt="Amruta Kadam" className="profile-img" />

            <div className="achievement-box">
              <h3>Achievements</h3>
              
                
                <p>• Completed 8-week training on Professional Emotional Intelligence Program (2025).</p>
    <p>• Completed 30 hours of value-added training covering fundamentals of data analysis, basic analytics concepts, and practical applications in real-world scenarios.</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-section">
            <h2>
              Hi, I’M <span>Amruta Kadam</span>.
            </h2>
            <p>
              High-achieving BCA student and Frontend Developer specializing in React.js, JavaScript (ES6+), and CSS3. Focused on building responsive, pixel-perfect user interfaces and translating complex designs into seamless web experiences.
            </p>

            <h3>Education</h3>
            <p>
            <ul>
              <li>
                <h4>
                <strong>Bachelor of Computer Applications (2024 - Present)</strong></h4>
                <br />
                Pillai College of Arts, Commerce & Science, New Panvel
                <br />
                Semester 1 SGPA: <strong>9.68 | </strong>Semester 2 SGPA: <strong>9.9 | </strong>Semester 3 SGPA: <strong>10</strong>
              </li>
              <li><h4>
                <strong>Higher Secondary in Commerce (2023 - 2024)</strong></h4>
                <br />
                D.G. Ruparel College, Matunga Road, Mumbai
                <br />
                HSC Board <strong>(88%)</strong>
              </li>
              <li><h4>
                <strong>Secondary Education (2021 - 2022)</strong></h4>
                <br />
                Abhyudaya Education Society High School, Mumbai
                <br />
                SSC Board <strong>(90%)</strong>
              </li>
            </ul>
            </p>
          </div>
        </div>

        {/* ---------- MIDDLE SECTION (Skills) ---------- */}
        <div className="middle-section">
          <div className="skills-container">
            <h3>Skills</h3>

            <div className="skills-grid">
              <div className="skill-box">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (ES6+)</li>
                 
                </ul>
              </div>

              <div className="skill-box">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Flask</li>
                  <li>Django REST</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                </ul>
              </div>

              <div className="skill-box">
                <h4>Database</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                </ul>
              </div>

              <div className="skill-box">
                <h4>Tools & Platforms</h4>
                <ul>
                  <li>GitHub</li>
                  <li>Firebase</li>
                </ul>
              </div>

              <div className="skill-box">
                <h4>Analytics & Visualization</h4>
                <ul>
                  <li>Power BI</li>
                  <li>Data-driven dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

