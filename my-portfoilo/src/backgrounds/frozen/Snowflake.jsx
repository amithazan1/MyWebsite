import React from "react";

const Snowflake = ({ x = 0, y = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 200 200"
      width="50"
      height="50"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      {/* Main lines */}
      <line
        x1="100"
        y1="20"
        x2="100"
        y2="180"
        stroke="white"
        stroke-width="4"
      />
      <line
        x1="20"
        y1="100"
        x2="180"
        y2="100"
        stroke="white"
        stroke-width="4"
      />
      <line x1="40" y1="40" x2="160" y2="160" stroke="white" stroke-width="4" />
      <line x1="160" y1="40" x2="40" y2="160" stroke="white" stroke-width="4" />

      {/*Small branches */}
      <line x1="100" y1="20" x2="90" y2="40" stroke="white" stroke-width="3" />
      <line x1="100" y1="20" x2="110" y2="40" stroke="white" stroke-width="3" />

      <line
        x1="100"
        y1="180"
        x2="90"
        y2="160"
        stroke="white"
        stroke-width="3"
      />
      <line
        x1="100"
        y1="180"
        x2="110"
        y2="160"
        stroke="white"
        stroke-width="3"
      />

      <line x1="20" y1="100" x2="40" y2="90" stroke="white" stroke-width="3" />
      <line x1="20" y1="100" x2="40" y2="110" stroke="white" stroke-width="3" />

      <line
        x1="180"
        y1="100"
        x2="160"
        y2="90"
        stroke="white"
        stroke-width="3"
      />
      <line
        x1="180"
        y1="100"
        x2="160"
        y2="110"
        stroke="white"
        stroke-width="3"
      />

      {/*Decorative snowflake arms */}
      <line x1="40" y1="40" x2="50" y2="60" stroke="white" stroke-width="3" />
      <line x1="40" y1="40" x2="60" y2="50" stroke="white" stroke-width="3" />

      <line
        x1="160"
        y1="160"
        x2="150"
        y2="140"
        stroke="white"
        stroke-width="3"
      />
      <line
        x1="160"
        y1="160"
        x2="140"
        y2="150"
        stroke="white"
        stroke-width="3"
      />

      <line x1="160" y1="40" x2="150" y2="60" stroke="white" stroke-width="3" />
      <line x1="160" y1="40" x2="140" y2="50" stroke="white" stroke-width="3" />

      <line x1="40" y1="160" x2="50" y2="140" stroke="white" stroke-width="3" />
      <line x1="40" y1="160" x2="60" y2="150" stroke="white" stroke-width="3" />
    </svg>
  );
};

export default Snowflake;
