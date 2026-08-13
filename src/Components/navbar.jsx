import React, { useRef } from "react";
import "../index.css";

const Navbar = () => {
  // Refs for each part of the page
  const bioRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="nav">
        <ul className="nav-list">
          <li onClick={() => scrollToRef(skillsRef)}>Skills</li>
          <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
          <li onClick={() => scrollToRef(contactRef)}>Contact</li>
        </ul>
      </nav>

      {/* Page content */}
      <div ref={skillsRef} className="page-section1">
        <h2>Skills</h2>

      </div>

      <div ref={projectsRef} className="page-section2">
        <h2>Projects</h2>

      </div>

      <div ref={contactRef} className="page-section3">
        <h2>Contact</h2>
      </div>
    </>
  );
};

export default Navbar;
