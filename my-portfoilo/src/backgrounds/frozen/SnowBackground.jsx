import React from "react";
import Snowflake from "./Snowflake";

const SnowBackground = () => {
  const snow = [
    { x: 1, y: 10 },
    { x: 10, y: 15 },
    { x: 1, y: 60 },
    { x: 3, y: 30 },
    { x: 15, y: 70 },
    { x: 9, y: 50 },
    { x: 6, y: 80 },
    { x: 20, y: 12 },
    { x: 30, y: 20 },
    { x: 47, y: 16 },
    { x: 66, y: 11 },
    { x: 57, y: 18 },
    { x: 80, y: 92 },
    { x: 90, y: 50 },
    { x: 88, y: 17 },
    { x: 82, y: 66 },
    { x: 90, y: 90 },
    { x: 70, y: 88 },
    { x: 50, y: 77 },
    { x: 40, y: 83 },
    { x: 30, y: 86 },
  ];

  return (
    <>
      {snow.map((sparkle, index) => (
        <Snowflake
          key={index}
          size={sparkle.size}
          x={sparkle.x}
          y={sparkle.y}
        />
      ))}
    </>
  );
};

export default SnowBackground;
