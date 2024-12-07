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

export const nightTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    secondary: {
      main: "#03dac6",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
