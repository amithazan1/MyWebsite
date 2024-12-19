import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { beautyBeastTheme, frozenTheme, wickedTheme } from "../assets/theme";

// Context for theme
const ThemeContext = createContext();
// Context for theme update function
const ThemeUpdateContext = createContext();
// Custom hook to access the `updateTheme` function.
export const useThemeUpdate = () => useContext(ThemeUpdateContext);
// Custom hook to access the `theme` varibale.
export const useTheme = () => useContext(ThemeContext);

// A React component that wraps its children in a theme context provider and
// applies the selected theme globally using Material-UI's ThemeProvider.
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    id: "Beauty and the Beast", // Default theme name
    data: beautyBeastTheme, // Default theme object
  });

  // Function to update the theme based on the selected option
  const updateTheme = (selectedTheme) => {
    switch (selectedTheme) {
      case "Beauty and the Beast":
        setTheme({ id: "Beauty and the Beast", data: beautyBeastTheme });
        break;
      case "Frozen":
        setTheme({ id: "Frozen", data: frozenTheme });
        break;
      case "Wicked":
        setTheme({ id: "Wicked", data: wickedTheme });
        break;
      default:
        console.warn("Unknown theme selected");
    }
  };

  return (
    <ThemeUpdateContext.Provider value={updateTheme}>
      <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme.data}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </ThemeUpdateContext.Provider>
  );
};
