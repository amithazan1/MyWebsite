import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import TechStackIcons from "../components/TechStackIcons";

export default function Skills() {
  const isMobile = useMediaQuery("(max-width:500px)");

  const categories = {
    Databases: ["MongoDB", "MySQL"],
    "Back-end": ["Node", "Express", "GraphQL"],
    Languages: ["JavaScript", "TypeScript", "C", "C++", "Java", "Python"],
    "Front-End": ["HTML", "CSS", "MUI", "Bootstrap"],
    "Version Control": ["Git", "Docker"],
  };

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        paddingY: 5,
        paddingX: 2,
        textAlign: "center",
        marginTop: 5,
      }}
    >
      <Typography
        variant="h4"
        color="primary.dark"
        sx={{ marginBottom: 4 }}
        className="acme-regular"
      >
        Skills & Tech Stack
      </Typography>

      {/* Loop through categories */}
      {Object.entries(categories).map(([category, stack], index) => (
        <Box
          key={category}
          display="flex"
          justifyContent="center"
          sx={{
            marginBottom: 4,
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <TechStackIcons stack={stack} />
        </Box>
      ))}

      {/* Divider at the bottom of the section */}
      <Divider
        variant="middle"
        sx={{
          borderBottomWidth: "2px",
          borderColor: "grey.300",
          width: "80%",
          marginTop: 5,
        }}
      />
    </Box>
  );
}
