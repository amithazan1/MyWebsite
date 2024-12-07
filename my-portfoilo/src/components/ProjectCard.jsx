import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import "../Fonts.css";

export default function ProjectCard({ name, description, image, onClick }) {
  return (
    <Card
      sx={{
        position: "relative",
        height: { xs: "30vh", md: "35vh" },
      }}
    >
      <Grid container spacing={2} onClick={onClick} sx={{ cursor: "pointer" }}>
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
          <CardContent>
            <Typography
              gutterBottom
              className="nunito-400"
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              className="anek-devanagari-200"
              sx={{ color: "text.secondary" }}
            >
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="#000">
              Learn More
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
