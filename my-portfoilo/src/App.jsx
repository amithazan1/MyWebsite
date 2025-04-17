import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";

import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import SparklesBackground from "./components/SparklesBackground";
import NavBar from "./components/NavBar";
import MouseFollower from "./components/MouseFollower";
import { ThemeContextProvider } from "./themes/ThemeContext";

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
