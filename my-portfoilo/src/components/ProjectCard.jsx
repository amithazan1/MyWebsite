import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import "../Fonts.css";
import GithubCorner from "react-github-corner";
import TechStackIcons from "./TechStackIcons";

export default function ProjectCard({
  name,
  description,
  image,
  gitLink,
  techStack,
}) {
  return (
    <Card
      sx={{
        position: "relative",
        height: { xs: "30vh", md: "35vh" },
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
      }}
    >
      <Grid container spacing={2} sx={{ cursor: "pointer" }}>
        {/** project image */}
        <Grid
          size={4}
          sx={{ height: { xs: "30vh", md: "35vh" }, bgcolor: "#000" }}
        >
          <CardMedia
            component="img"
            sx={{
              background: "white",
              height: "100%",
              objectFit: "contain",
            }}
            alt={name}
            image={image}
          />
        </Grid>
        {/** project description */}
        <Grid size={8}>
          <CardContent
            sx={{
              maxHeight: { xs: "25vh", md: "30vh" }, // Adjust the maxHeight to fit your card's design
              overflowY: "auto",
            }}
          >
            <Typography
              gutterBottom
              className="nunito-400"
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: "16px", sm: "20px" } }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              className="anek-devanagari-200"
              sx={{
                color: "text.secondary",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: "nowrap",
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: "5px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "rgba(0,0,0,0.7)",
                },
              }}
            >
              {description}
            </Typography>
          </CardContent>
          {/* Tech stack icons at bottom */}
          <Box sx={{ px: 2, pb: 1 }}>
            <TechStackIcons stack={techStack} />
          </Box>
          <CardActions>
            <GithubCorner href={gitLink} size={50} />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
