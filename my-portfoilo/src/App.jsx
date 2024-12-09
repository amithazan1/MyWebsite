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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Skills from "./pages/Skills";
import SparklesBackground from "./components/SparklesBackground";
import { beautyBeastTheme, frozenTheme } from "./assets/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={frozenTheme}>
        <CssBaseline />

        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
