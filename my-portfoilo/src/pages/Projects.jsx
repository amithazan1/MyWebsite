import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid2";

export default function Projects() {
  // Define the GitHub URLs for the projects
  const projectLinks = {
    MidMeet: "https://github.com/SimonFraiberg/MidMeetPublic",
    Dibor: "https://github.com/SimonFraiberg/dibor-Web",
    "KNN classifier":
      "https://github.com/SimonFraiberg/AdvancedProgramming-1-part-4",
    "arkanoid game": "https://github.com/yourusername/arkanoid-game",
  };

  const handleCardClick = (projectName) => {
    window.open(projectLinks[projectName], "_blank");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center", // Center items vertically
          alignItems: "center", // Center items horizontally
          height: "100vh", // Ensure it takes full viewport height
          marginTop: { xs: "15vh", md: 0 }, // Start from 10vh on small screens
        }}
      >
        <Grid
          container
          justifyContent="center" // Centers horizontally
          spacing={2}
          rowSpacing={3}
          columnSpacing={4}
        >
          <Grid size={{ xs: 10, md: 5 }}>
            <ProjectCard
              name="MidMeet"
              description="MidMeet is a web application that suggests a convenient meeting location for users based on their locations and preferences.
            The app leverages the Google Places API to provide recommendations for restaurants, activities, and more."
              image="./route-icon.png"
              onClick={() => handleCardClick("MidMeet")}
            />
          </Grid>
          <Grid size={{ xs: 10, md: 5 }}>
            <ProjectCard
              name="Dibor"
              description="Dibor is a web-based chat application inspired by WhatsApp Web "
              image="./chat-app.png"
              onClick={() => handleCardClick("Dibor")}
            />
          </Grid>
          <Grid size={{ xs: 10, md: 5 }}>
            <ProjectCard
              name="KNN classifier"
              description="Dibor is a web-based chat application inspired by WhatsApp Web "
              image="./KNN.jpg"
              onClick={() => handleCardClick("KNN classifier")}
            />
          </Grid>
          <Grid size={{ xs: 10, md: 5 }}>
            <ProjectCard
              name="arkanoid game"
              description="Dibor is a web-based chat application inspired by WhatsApp Web "
              image="./arkanoid.png"
              onClick={() => handleCardClick("arkanoid game")}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
