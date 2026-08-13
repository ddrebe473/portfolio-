import React, { useEffect, useState } from "react";
import "../../styles.css";

const Bod = () => {
  const [squares, setSquares] = useState([]);

  const createGrid = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Dynamic square size based on screen width
    let squareSize = 40;
    if (width < 400) squareSize = 15;
    else if (width < 768) squareSize = 25;
    else if (width < 1200) squareSize = 30;
    else squareSize = 35;

    // Set CSS variable
    document.documentElement.style.setProperty(
      "--square-size",
      `${squareSize}px`
    );

    const cols = Math.ceil(width / squareSize);
    const rows = Math.ceil(height / squareSize);

    document.documentElement.style.setProperty("--cols", cols);

    const newSquares = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        newSquares.push({ key: `${r}-${c}`, delay: (r + c) * 0.02 , row: r, col: c });
      }
    }
    setSquares(newSquares);
  };

  useEffect(() => {
    createGrid();
    window.addEventListener("resize", createGrid);
    return () => window.removeEventListener("resize", createGrid);
  }, []);

  return (
    <div className="grid">
      {squares.map((sq) => (
        <div key={sq.key} style={{ animationDelay: `${sq.delay}s` }}></div>
      ))}
    </div>
  );
};

export default Bod;
