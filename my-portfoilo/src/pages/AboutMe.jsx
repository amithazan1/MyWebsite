import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AboutMe() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      justifyContent="center" // Centers horizontally
      alignItems="center" // Centers vertically
      spacing={2}
      sx={{
        height: { xs: "100vh" }, // Ensure full viewport height for vertical centering
        width: "100%",
        paddingTop: { xs: "10vh" },
        paddingBottom: { xs: "5vh" },
      }}
    >
      {/* Left: Image */}
      {!isMobile && (
        <Grid
          size={{ sm: 4 }}
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
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
            alt="amit"
            src="./about-emoji.png"
          />
        </Grid>
      )}

      {/* Right: Content */}
      <Grid
        size={{ sm: 7 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          margin: "5px",
        }}
      >
        {!isMobile && (
          <Card
            sx={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              maxHeight: "500px",
              maxWidth: "100%",
              overflowY: "visible",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <CardContent
              sx={{
                overflow: "auto",
                height: "100%",
              }}
            >
              <Typography
                variant="subtitle1"
                className="anek-devanagari-200"
                component="div"
                color="primary.dark"
                sx={{ fontSize: { xs: "16px", sm: "18px" } }}
              >
                <ul
                  style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
                >
                  <li>
                    <b>I am a recent Computer Science graduate </b> from
                    Bar-Ilan University, where I honed my skills and passion for
                    technology.
                  </li>
                  <li>
                    My journey in computer science began in high school, where I
                    completed 10 units in the subject, sparking my interest and
                    setting the foundation for my degree.
                  </li>
                  <li>
                    Although I don’t have formal job experience, I am highly
                    motivated and eager to learn.
                  </li>
                  <li>
                    During my studies, I worked on diverse projects, gaining
                    practical experience with modern frameworks such as{" "}
                    <b>React, Node.js, MongoDB, and Express.</b> These
                    experiences have helped me develop problem-solving skills
                    and a strong foundation in software development.
                  </li>
                  <li>
                    I’m now looking for an opportunity to grow, contribute, and
                    take on exciting challenges in the tech industry.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        )}
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "background.paper",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              padding: "20px",
              width: "90%",
              gap: "15px",
            }}
          >
            {/* Avatar */}
            <Avatar
              alt="Profile Picture"
              src="./emoji1.jpeg" // Replace with your avatar image URL
              sx={{
                width: 120,
                height: 120,
                border: "2px solid no",
              }}
            />

            {/* Content */}
            <Typography
              variant="subtitle1"
              component="div"
              color="primary.dark"
              className="anek-devanagari-200"
              sx={{
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}>
                <li>
                  <b>I’m a recent Computer Science graduate</b> from Bar-Ilan
                  University.
                </li>
                <li>
                  I’ve worked on various projects during my studies, gaining
                  hands-on experience with frameworks like{" "}
                  <b>React, Node.js, MongoDB, and Express</b>.
                </li>
                <li>
                  I’m confident that with the right guidance, I can make a real
                  impact in the tech industry.
                </li>
              </ul>
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}
