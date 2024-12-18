import { createContext, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { beautyBeastTheme, frozenTheme } from "../assets/theme";

// Context for theme update function
const ThemeUpdateContext = createContext();
// Custom hook to access the `updateTheme` function.
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

// A React component that wraps its children in a theme context provider and
// applies the selected theme globally using Material-UI's ThemeProvider.
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(beautyBeastTheme); // Default to Beauty and the Beast theme

  // Function to update the theme based on the selected option
  const updateTheme = (selectedTheme) => {
    switch (selectedTheme) {
      case "Beauty and the Beast":
        setTheme(beautyBeastTheme);
        break;
      case "Frozen":
        setTheme(frozenTheme);
        break;
      default:
        console.warn("Unknown theme selected");
    }
  };

  return (
    <ThemeUpdateContext.Provider value={updateTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeUpdateContext.Provider>
  );
};
