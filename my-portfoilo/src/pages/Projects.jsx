import React from "react";

import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";

export default function Projects() {
  // Define the GitHub URLs for the projects
  const projectLinks = {
    MidMeet: "https://github.com/amithazan1/MidMeetPublic",
    Dibor: "https://github.com/amithazan1/dibor-Web",
    "KNN classifier":
      "https://github.com/SimonFraiberg/AdvancedProgramming-1-part-4",
    "arkanoid game": "https://github.com/amithazan1/Arkanoid",
    "Expense Tracker": "https://github.com/amithazan1/ExpenseTracker",
  };

  return (
    <>
      <Grid
        container
        justifyContent="center" // Centers horizontally
        alignItems="center" // Centers vertically
        spacing={2}
        sx={{
          height: { sm: "100vh" }, // Ensure full viewport height for vertical centering
          width: "100%",
          marginTop: 5,
          paddingBottom: { xs: "5vh" },
        }}
      >
        <Grid size={{ xs: 10, md: 5 }}>
          <ProjectCard
            name="Expense Tracker"
            description="
              A simple and intuitive Expense Tracker built with GraphQL,
              React, and Tailwind CSS, designed to help you manage your finances."
            image="./expenseTracker.png"
            gitLink={projectLinks["Expense Tracker"]}
            techStack={["graphQL", "react", "mongoDB", "tailwind"]}
          />
        </Grid>
        <Grid size={{ xs: 10, md: 5 }}>
          <ProjectCard
            name="MidMeet"
            description="MidMeet is a web application that suggests a convenient meeting location for users based on their locations and preferences.
            The app leverages the Google Places API to provide recommendations for restaurants, activities, and more."
            image="./route-icon.png"
            gitLink={projectLinks["MidMeet"]}
            techStack={["react", "node", "express", "mongodb", "mui"]}
          />
        </Grid>
        <Grid size={{ xs: 10, md: 5 }}>
          <ProjectCard
            name="Dibor"
            description="Dibor is a web-based chat application inspired by WhatsApp Web "
            image="./chat-app.png"
            gitLink={projectLinks["Dibor"]}
            techStack={["react", "node", "express", "mongodb", "bootstrap"]}
          />
        </Grid>
        <Grid size={{ xs: 10, md: 5 }}>
          <ProjectCard
            name="KNN classifier"
            description="
               A client-server system for data classification using a multi-threaded server architecture in C++.
               The server handles client requests concurrently to classify data efficiently. "
            image="./KNN.jpg"
            gitLink={projectLinks["KNN classifier"]}
            techStack={["cplusplus"]}
          />
        </Grid>
        <Grid size={{ xs: 10, md: 5 }}>
          <ProjectCard
            name="arkanoid game"
            description="
              Created an Arkanoid game in Java using object-oriented programming.
               The game includes features like paddle movement, ball collisions, and brick-breaking mechanics. "
            image="./arkanoid.png"
            gitLink={projectLinks["arkanoid game"]}
            techStack={["java"]}
          />
        </Grid>
        <Divider
          variant="middle"
          sx={{
            borderBottomWidth: "2px",
            borderColor: "grey.300",
            width: "80%",
            marginTop: 5,
          }}
        />
      </Grid>
    </>
  );
}
