import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function AboutMe() {
  return (
    <Grid
      container
      justifyContent="center" // Centers horizontally
      alignItems="center" // Centers vertically
      sx={{
        height: "100vh", // Full viewport height
        width: "100%",
        marginTop: { xs: 5, sm: 0 },
      }}
    >
      {/* Left: Image */}
      <Grid
        size={{ xs: 8, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          component="img"
          sx={{ maxHeight: "600px" }}
          alt="amit"
          src="./about-emoji.png" // Replace with your image URL
        />
      </Grid>

      {/* Right: Card */}
      <Grid
        size={{ sm: 10, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      >
        <Card
          sx={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            maxHeight: "500px",
            maxWidth: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="subtitle1"
              className="anek-devanagari-200"
              component="div"
              color="primary.dark"
              sx={{ fontSize: "18px" }}
            >
              <div>
                I’m a recent computer science graduate from Bar-Ilan University.
              </div>
              <div>
                I’ve been interested in the field since high school, where I
                completed 10 units in computer science, and I pursued my degree
                to take my skills to the next level.
              </div>
              <div>
                While I don’t have formal job experience, I’m highly motivated
                and eager to learn. I’ve worked on various projects during my
                studies, gaining hands-on experience with frameworks like React,
                Node.js, MongoDB, and Express.
              </div>
              <div>
                I’m looking for an opportunity to contribute, grow, and take on
                new challenges.
              </div>
              I’m confident that with the right guidance, I can make a real
              impact and am seeking someone willing to
              <div className="spicy-rice-regular">take a chance on me.</div>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
