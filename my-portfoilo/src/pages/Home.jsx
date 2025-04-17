import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import "../Fonts.css";

export default function Home() {
  return (
    <>
      <Grid
        container
        spacing={4}
        justifyContent="center" // Centers horizontally
        alignItems="center" // Centers vertically
        sx={{
          height: "100vh", // Full viewport height
          width: "100%",
          textAlign: { xs: "center", sm: "left" }, // Center text for xs screens
          marginTop: { xs: 5, sm: 0 },
        }}
      >
        {/** Left: text */}
        <Grid
          size={{ xs: 12, sm: 6, lg: 4 }}
          sx={{
            display: "flex",
            flexDirection: "column", // Stack text and buttons
            justifyContent: "center", // Center vertically
            alignItems: { xs: "center", sm: "flex-start" }, // Align text on xs
            padding: { xs: 2, sm: 5 },
          }}
        >
          <Typography
            variant="h4"
            component="div"
            color="primary.dark"
            className="acme-regular"
            sx={{ marginBottom: 2 }}
          >
            I'm Amit Hazan
          </Typography>

          <Typography
            className="acme-regular"
            variant="h6"
            component="div"
            color="primary.dark"
            sx={{ marginBottom: 2 }}
          >
            Full-stack Developer | Softwere Developer
          </Typography>

          <Typography
            className="anek-devanagari-200"
            variant="body1"
            component="div"
            color="primary.dark"
            sx={{ marginBottom: 4 }}
          >
            B.sc in Computer Science from Bar-Ilan University
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" }, // Center buttons on xs
              gap: 2,
            }}
          >
            <IconButton
              aria-label="github"
              color="primary"
              sx={{ bgcolor: "black.main" }}
              onClick={() =>
                window.open("https://github.com/amithazan1", "_blank")
              }
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="linkedin"
              color="primary"
              sx={{ bgcolor: "black.main" }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/amit-hazan1", "_blank")
              }
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Button
            href="#projects"
            variant="contained"
            sx={{
              mt: 2,
              mr: 2,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            View My Work
          </Button>
        </Grid>

        {/** Right: image */}
        <Grid size={{ xs: 8, sm: 5, md: 4, lg: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Avatar
              alt="my photo"
              src="./hey_emoji.gif"
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
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
    </>
  );
}
