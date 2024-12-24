import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import "../Fonts.css";
import GithubCorner from "react-github-corner";

export default function ProjectCard({ name, description, image, gitLink }) {
  return (
    <Card
      sx={{
        position: "relative",
        height: { xs: "30vh", md: "35vh" },
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
          <CardActions>
            <GithubCorner href={gitLink} size={50} />
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
