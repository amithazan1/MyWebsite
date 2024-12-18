import React, { useState, useEffect } from "react";
import "./mouseFollower.css";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener on mount
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      src="rose.png"
      alt="Rose"
      className="rose"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default MouseFollower;
