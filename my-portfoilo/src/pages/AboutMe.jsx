import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";

export default function AboutMe() {
  const isMobile = useMediaQuery("(max-width:600px)");

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
        About Me
      </Typography>

      {/* Main Grid */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ paddingX: 2 }}
      >
        {/* Image (only on desktop) */}
        {!isMobile && (
          <Grid
            size={{ sm: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="Amit"
              src="./about-emoji.png"
              sx={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            />
          </Grid>
        )}

        {/* Content */}
        <Grid
          size={{ xs: 12, sm: 7 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grow in timeout={1000}>
            {!isMobile ? (
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  maxWidth: "600px",
                  padding: "24px",
                }}
              >
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    className="anek-devanagari-200"
                    color="primary.dark"
                    sx={{ fontSize: "18px", lineHeight: 1.8 }}
                  >
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li>
                        I’m a <b>Computer Science graduate</b> from Bar-Ilan
                        University with a solid foundation in software
                        development.
                      </li>
                      <li>
                        My journey began in high school where I completed{" "}
                        <b>10 units</b> in CS — and the passion only grew.
                      </li>
                      <li>
                        I've built projects using{" "}
                        <b>React, Node.js, MongoDB, and Express</b>, sharpening
                        my full-stack development skills.
                      </li>
                      <li>
                        While I may not have formal job experience, I'm{" "}
                        <b>
                          motivated, a quick learner, and ready to contribute
                        </b>{" "}
                        to exciting tech projects.
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            ) : (
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
                <Avatar
                  alt="Profile Picture"
                  src="./emoji1.jpeg"
                  sx={{ width: 120, height: 120 }}
                />
                <Typography
                  variant="subtitle1"
                  className="anek-devanagari-200"
                  color="primary.dark"
                  sx={{ fontSize: "15px", lineHeight: 1.8 }}
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li>
                      I’m a <b>Computer Science graduate</b> from Bar-Ilan
                      University.
                    </li>
                    <li>
                      I’ve built projects using{" "}
                      <b>React, Node.js, MongoDB, and Express</b>.
                    </li>
                    <li>
                      I'm <b>motivated</b> and ready to grow in a team that
                      values curiosity and dedication.
                    </li>
                  </ul>
                </Typography>
              </Box>
            )}
          </Grow>
        </Grid>
      </Grid>
      <Divider
        variant="middle"
        sx={{
          marginTop: 6,
          borderBottomWidth: "2px",
          borderColor: "grey.300",
          width: "80%",
          marginX: "auto",
        }}
      />
    </Box>
  );
}
