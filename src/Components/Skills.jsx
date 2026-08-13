import React from "react";
import "../index.css"
import Rust from "../assets/Rust.png";
import Js from "../assets/JS.webp";
import python from "../assets/Python.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import react from "../assets/React-icon.svg.png";
const skills = () => {
  
  return (

    <div className="skills">
          <h1 className="text3">My Skills</h1>

    <div className="mySkills">
        <img src={python} alt="Test" />
        <img src={Rust} alt="Test" />
        <img src={Js} alt="Test" />
        <img src={html} alt="Test" />
        <img src={css} alt="Test"/>
        <img src={react}alt="Test" />
      </div>
      </div>
  );
};

export default skills;
