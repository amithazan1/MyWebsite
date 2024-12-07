import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
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
          height: "100%",
          width: "100%",
        }}
      >
        {/** Left: text */}
        <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
          <Box
            sx={{
              width: "100%",
              marginLeft: 5,
              marginTop: 15,
            }}
          >
            <Typography
              variant="h4"
              component="div"
              color="primary.dark"
              className="acme-regular"
            >
              Hi There,
            </Typography>

            <Typography
              className="acme-regular"
              variant="h4"
              component="div"
              color="primary.dark"
            >
              I'm Amit Hazan,
            </Typography>

            <Typography
              className="anek-devanagari-200"
              variant="body1"
              component="div"
              color="primary.dark"
            >
              B.sc in Computer Science from Bar-Ilan University
            </Typography>
          </Box>
          <Box
            sx={{
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
              height: "10vh",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <IconButton
              aria-label="github"
              color="primary"
              sx={{ bgcolor: "black.main", margin: 1 }}
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
        </Grid>
        {/** Right: image */}
        <Grid size={{ xs: 6, sm: 5, md: 4, lg: 3 }}>
          <Box
            sx={{
              marginTop: 5,
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
    </>
  );
}
