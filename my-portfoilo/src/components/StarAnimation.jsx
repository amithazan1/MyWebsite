import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const StarAnimation = () => {
  // Define the positions and sizes for the seven stars
  const stars = [
    { top: "10%", left: "15%", size: "8%" },
    { top: "20%", left: "70%", size: "12%" },
    { top: "50%", left: "30%", size: "10%" },
    { top: "65%", left: "80%", size: "9%" },
    { top: "50%", left: "2%", size: "11%" },
    { top: "35%", left: "50%", size: "7%" },
    { top: "5%", left: "85%", size: "6%" },
    { top: "40%", left: "65%", size: "9%" },
  ];

  return (
    <>
      {stars.map((star, index) => (
        <Player
          key={index}
          autoplay
          loop
          src="Animation-sparkle.json"
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            zIndex: -1,
          }}
        />
      ))}
    </>
  );
};

export default StarAnimation;
