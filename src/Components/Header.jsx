import React from "react";
import me from "../assets/me.jpg";
import "../index.css"
const Header = () => {
    return (
      <div>
        <div className="me">
          <img id="image"src={me} alt="Test" />
          <h1>Dylan Drebes</h1>
        </div>
      </div>
    );
};


export default Header;
