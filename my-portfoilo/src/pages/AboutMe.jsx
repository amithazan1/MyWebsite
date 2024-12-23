import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AboutMe() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Grid
      container
      justifyContent="center" // Centers horizontally
      alignItems="center" // Centers vertically
      sx={{
        marginTop: "5%",
        height: "87%",
        width: "100%",
      }}
    >
      {/* Left: Image */}
      {!isMobile && (
        <Grid
          size={{ xs: 6, md: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "5px",
          }}
        >
          <Box
            component="img"
            sx={{
              maxWidth: "90%", // Responsive resizing
              maxHeight: "90%", // Keep image within bounds
              objectFit: "contain", // Prevent distortion
            }}
            alt="amit"
            src="./about-emoji.png" // Replace with your image URL
          />
        </Grid>
      )}

      {/* Right: Card */}
      <Grid
        size={{ xs: 10, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        {!isMobile && (
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              maxHeight: "500px",
              maxWidth: "100%",
              overflowY: isMobile ? "auto" : "visible",
              flexWrap: isMobile ? "nowrap" : "wrap",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <CardContent
              sx={{
                overflow: "auto", // Enable scrolling if content overflows
                height: "100%", // Fill available height
              }}
            >
              <Typography
                variant="subtitle1"
                className="anek-devanagari-200"
                component="div"
                color="primary.dark"
                sx={{ fontSize: { xs: "16px", sm: "18px" } }} // Responsive font size
              >
                <ul>
                  <li>
                    I’m a recent computer science graduate from Bar-Ilan
                    University
                  </li>
                  <li>
                    I’ve been interested in the field since high school, where I
                    completed 10 units in computer science, and I pursued my
                    degree to take my skills to the next level.
                  </li>
                  <li>
                    While I don’t have formal job experience, I’m highly
                    motivated and eager to learn.
                  </li>
                  <li>
                    I’ve worked on various projects during my studies, gaining
                    hands-on experience with frameworks like{" "}
                    <b> React, Node.js, MongoDB, and Express </b>.
                  </li>
                  <li>
                    I’m looking for an opportunity to contribute, grow, and take
                    on new challenges.
                  </li>
                  <li>
                    I’m confident that with the right guidance, I can make a
                    real impact and am seeking someone willing to
                    <span className="spicy-rice-regular">
                      {" "}
                      take a chance on me.
                    </span>
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        )}
        {isMobile && (
          <Typography
            variant="subtitle1"
            className="anek-devanagari-200"
            component="div"
            color="primary.dark"
            sx={{ fontSize: "18px" }}
          >
            <ul>
              <li>
                I’m a recent computer science graduate from Bar-Ilan University
              </li>
              <li>
                I’ve worked on various projects during my studies, gaining
                hands-on experience with frameworks like{" "}
                <b> React, Node.js, MongoDB, and Express </b>.
              </li>
              <li>
                I’m confident that with the right guidance, I can make a real
                impact and am seeking someone willing to
                <span className="spicy-rice-regular">
                  {" "}
                  take a chance on me.
                </span>
              </li>
            </ul>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
