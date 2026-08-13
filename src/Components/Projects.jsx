import React from "react";
import "../index.css";
import lock from "../assets/lock.png";
import scraper from "../assets/18408116.png";
import camera from "../assets/camera.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="text2">My Projects</h1>
      <div className="ProjectsRow">
        <a
          href="https://github.com/ddrebe473/Random_Password_Generator"
          target="_blank"
          rel="noopener noreferrer"
          className="ProjectLink"
        >
          <div className="ProjectCard">
            <img src={lock} alt="Password Generator" className="lock" />
            <h2 className="text">
              This is my password generator. I created this using Rust. It
              generates a password within the command line.
            </h2>
          </div>
        </a>

        <a
          href="https://github.com/ddrebe473/scraper"
          target="_blank"
          rel="noopener noreferrer"
          className="ProjectLink"
        >
          <div className="ProjectCard">
            <img src={scraper} alt="Web Scraper" className="lock" />
            <h2 className="text">
              This is my web scraper. I created this using Rust. It scrapes a
              test website's product data.
            </h2>
          </div>
        </a>

        <a
          href="https://github.com/ddrebe473/face_recognition"
          target="_blank"
          rel="noopener noreferrer"
          className="ProjectLink"
        >
          <div className="ProjectCard">
            <img src={camera} alt="Face Recognizer" className="lock" />
            <h2 className="text">
              This is my face recognizer. I created this in Python and
              highlights faces with a red square.
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
