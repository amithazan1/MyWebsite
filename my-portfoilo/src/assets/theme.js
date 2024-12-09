// theme.js or theme.ts
import { createTheme } from "@mui/material/styles";

export const beautyBeastTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#855A2C", //brown
    },
    secondary: {
      main: "#304ffe", //blue
    },
    background: {
      default: "rgba(255,253,131,0.1)", //yellow
      paper: "rgba(231,194,98,0.5)", //gold
    },

    text: {
      primary: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(10deg, rgba(232,195,101,1) 41%, rgba(231,194,98,1) 67%, rgba(255,235,131,1) 100%, rgba(218,165,32,1) 100%)",
        },
      },
    },
  },
});

export const frozenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", //blue
    },
    secondary: {
      main: "#000000", //black
    },
    background: {
      default: "#7ff0e6", //light blue
      paper: "#b1fff8", //gold
    },
    text: {
      primary: "#000000",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "url('./frozen_background1.jpg')", // Adjust this path to match your image location
          backgroundSize: "cover", // Ensure the image covers the viewport
          backgroundRepeat: "no-repeat", // Prevent tiling
          backgroundPosition: "center", // Center the image
          height: "100vh", // Optional: ensure the background spans full height
        },
      },
    },
  },
});
