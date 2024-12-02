import React from "react";
import Background from "../components/Background";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid2";
import Avatar from "@mui/material/Avatar";
import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { beautyBeastTheme } from "../assets/theme";
import "../Fonts.css";
import StarAnimation from "../components/StarAnimation";

const blackBase = "#000000";
const blackMain = alpha(blackBase, 0.7);
const violetBase = "#FEFAFF";
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    black: {
      main: blackBase,
      light: alpha(blackBase, 0.5),
      dark: alpha(blackBase, 0.9),
      contrastText: getContrastRatio(blackMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    violet: {
      main: violetBase,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={beautyBeastTheme} injectFirst>
        <Grid
          container
          spacing={4}
          justifyContent="center" // Centers horizontally
          alignItems="center" // Centers vertically
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
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
                  window.open(
                    "https://www.linkedin.com/in/amit-hazan1",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          {/** Right: image */}
          <Grid size={{ xs: 6, sm: 5, lg: 3 }}>
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
      </ThemeProvider>
    </>
  );
}
