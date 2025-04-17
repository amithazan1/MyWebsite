import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TopBar from "./components/TopBar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";

import LowerBar from "./components/LowerBar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import SparklesBackground from "./components/SparklesBackground";
import { beautyBeastTheme, frozenTheme } from "./assets/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnowBackground from "./backgrounds/frozen/SnowBackground";
import MouseFollower from "./components/MouseFollower";
import { ThemeContextProvider } from "./themes/ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "./components/NavBar";

function App() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />
        {!isMobile && <MouseFollower />}
        <SparklesBackground />
        <NavBar />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
        {/** 
        <BrowserRouter>
          <TopBar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          
        </BrowserRouter>
        */}
      </ThemeContextProvider>
    </>
  );
}

export default App;
