import React from "react";
import "../index.css"
import me from "../assets/me.jpg";
import Typewriter from "typewriter-effect";
const Bio = () => {
    return (
      <div className="containerMe">
        <div className="bio">
          <div className="me">
            <img id="image" src={me} alt="Test" />
            <h1>Dylan Drebes</h1>
          </div>

          <h2 className="aboutme">
            <Typewriter
              options={{
                strings:
                  "I'm Dylan, a Cybersecurity student at GCC. I work with Python, Rust, and JavaScript, with a focus on cybersecurity and web development. I enjoy building secure, functional, and clean-looking applications.",
                autoStart: true,
                delay: 40,
              }}
            />
          </h2>
        </div>
      </div>
    );
};


export default Bio;
