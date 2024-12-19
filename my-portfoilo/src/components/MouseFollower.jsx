import React, { useState, useEffect } from "react";
import "./mouseFollower.css";
import { useTheme } from "../themes/ThemeContext";

// Import images
import beastImg from "../../public/beast.png";
import olafImg from "../../public/olaf.png";
import wickedImg from "../../public/wicked.png";

const MouseFollower = () => {
  const theme = useTheme(); // Get the theme object
  const [img, setImg] = useState(beastImg); // Default image
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update image position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX + 10, y: event.clientY + 10 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update the image when the theme changes
  useEffect(() => {
    switch (theme.id) {
      case "Beauty and the Beast":
        setImg(beastImg);
        break;
      case "Frozen":
        setImg(olafImg);
        break;
      case "Wicked":
        setImg(wickedImg);
        break;
      default:
        console.warn("Unknown theme selected");
        setImg(beastImg); // Fallback image
    }
  }, [theme]);

  return (
    <img
      src={img}
      alt="Mouse Follower"
      className="mouseImg"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default MouseFollower;
