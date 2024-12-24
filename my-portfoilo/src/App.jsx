import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import LowerBar from "./components/LowerBar";
import Stack from "@mui/material/Stack";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Skills from "./pages/Skills";
import SparklesBackground from "./components/SparklesBackground";
import { beautyBeastTheme, frozenTheme } from "./assets/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnowBackground from "./backgrounds/frozen/SnowBackground";
import MouseFollower from "./components/MouseFollower";
import { ThemeContextProvider } from "./themes/ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />
        {!isMobile && <MouseFollower />}
        <SparklesBackground />
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </>
  );
}

export default App;
