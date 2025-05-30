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
      paper: "#fffd96", //yellow
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
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 4,
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "0.2s",
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export const frozenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", //black
    },
    secondary: {
      main: "#000000", //black
    },
    background: {
      default: "#89c9eb", //light blue
      paper: "#a6dbf7", //light blue
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
            "linear-gradient(180deg, rgba(17,100,178,1) 0%, rgba(137,200,235,1) 100%)",
        },
      },
    },
  },
});

export const wickedTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", //black
    },
    secondary: {
      main: "#000000", //black
    },
    background: {
      default: "#89c9eb", //light blue
      paper: "#74ff93", // green
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
            "linear-gradient(45deg, rgba(255,189,244,1) 33%, rgba(52,207,86,1) 96%);",
        },
      },
    },
  },
});
