import React from "react";
import StarAnimation from "./StarAnimation";

const SparkleShape = ({ size, x, y }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    style={{
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
    }}
  >
    {/* Center Circle */}
    <circle cx="50" cy="50" r="1" fill="white" />

    {/* Plus Shape */}
    <line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="0.8" />
    <line x1="20" y1="50" x2="80" y2="50" stroke="white" strokeWidth="0.8" />

    {/* X Shape */}
    <line x1="30" y1="40" x2="70" y2="60" stroke="white" strokeWidth="0.3" />
    <line x1="70" y1="40" x2="30" y2="60" stroke="white" strokeWidth="0.3" />
  </svg>
);

const SparklesBackground = () => {
  const sparkles = [
    { size: 70, x: 1, y: 1 }, // Medium sparkle at top-left
    { size: 50, x: 10, y: 10 }, // Small sparkle at top-left
    { size: 40, x: 10, y: 80 }, // Small sparkle near bottom-left
    { size: 80, x: 20, y: 5 }, // Small sparkle at top-left
    { size: 80, x: 20, y: 60 }, // Larger sparkle at bottom-left
    { size: 45, x: 25, y: 70 }, // Small sparkle near bottom-left
    { size: 30, x: 30, y: 40 }, // Tiny sparkle randomly placed
    { size: 55, x: 35, y: 50 }, // Medium sparkle near center
    { size: 70, x: 40, y: 20 }, // Medium sparkle near center
    //{ size: 65, x: 40, y: 90 }, // Medium sparkle near bottom-center
    { size: 30, x: 50, y: 20 }, // Tiny sparkle near center
    { size: 30, x: 45, y: 10 }, // Tiny sparkle near center
    { size: 50, x: 60, y: 5 }, // Small sparkle near center
    { size: 30, x: 70, y: 20 }, // Tiny sparkle near center
    { size: 70, x: 50, y: 30 }, // Medium sparkle near center
    { size: 60, x: 50, y: 70 }, // Medium sparkle near bottom-center
    { size: 85, x: 75, y: 10 }, // Larger sparkle near top-right
    { size: 50, x: 90, y: 1 }, // Small sparkle near top-right
    { size: 70, x: 90, y: 15 }, // Medium sparkle near top-right
    { size: 100, x: 80, y: 70 }, // Largest sparkle at bottom-right
    { size: 70, x: 80, y: 40 }, // Medium sparkle near right side
    { size: 75, x: 90, y: 30 }, // Larger sparkle near top-right
  ];

  return (
    <>
      {/** 
      {sparkles.map((sparkle, index) => (
        <SparkleShape
          key={index}
          size={sparkle.size}
          x={sparkle.x}
          y={sparkle.y}
        />
      ))}
      */}
      <StarAnimation />
    </>
  );
};

export default SparklesBackground;
