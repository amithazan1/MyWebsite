import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@emotion/react";
import { beautyBeastTheme } from "../assets/theme";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiExpress,
  SiGraphql,
  SiBootstrap,
  SiPython,
  SiCplusplus,
  SiC,
  SiAssemblyscript,
  SiCss3,
} from "react-icons/si";

const categories = {
  Databases: [
    { name: "MongoDB", icon: <SiMongodb color="#47a248" size={50} /> },
    { name: "MySQL", icon: <SiMysql color="#4479a1" size={50} /> },
  ],
  "Web Development Tools": [
    { name: "React", icon: <FaReact color="#61dafb" size={50} /> },
    { name: "Node.js", icon: <FaNodeJs color="#83cd29" size={50} /> },
    { name: "Express", icon: <SiExpress color="white" size={50} /> },
    { name: "GraphQL", icon: <SiGraphql color="#e10098" size={50} /> },
  ],
  Languages: [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={50} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={50} /> },
    { name: "C", icon: <SiC color="#00599c" size={50} /> },
    { name: "C++", icon: <SiCplusplus color="#00599c" size={50} /> },
    { name: "Java", icon: <FaJava color="#007396" size={50} /> },
    { name: "Python", icon: <SiPython color="#3776ab" size={50} /> },
    { name: "Assembly", icon: <SiAssemblyscript color="#ffa500" size={50} /> },
  ],
  "Front-End": [
    { name: "CSS3", icon: <SiCss3 color="#1572b6" size={50} /> },
    { name: "Material-UI", icon: <img src="mui.svg" height={50} width={50} /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" size={50} /> },
    { name: "HTML5", icon: <FaHtml5 color="#e34f26" size={50} /> },
  ],
  "Version Control": [
    { name: "Git", icon: <SiGit color="#f05032" size={50} /> },
    { name: "Docker", icon: <SiDocker color="#2496ed" size={50} /> },
  ],
};
export default function Skills() {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        top: "10vh",
      }}
    >
      {Object.keys(categories).map((category) => (
        <Stack direction="column" justifyContent="center">
          <Typography
            className="nunito-400"
            variant="h5"
            gutterBottom
            color="primary"
            sx={{ textAlign: "center", fontSize: "18px" }}
          >
            {category}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {categories[category].map((skill, index) => (
              <Grid item key={index} xs={3} sm={1} md={3} lg={2}>
                <Box
                  sx={{
                    backgroundColor: "primary.dark",
                    position: "relative",
                    minWidth: "80px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "5px",
                    color: "white",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
                    },
                    marginBottom: "5px",
                  }}
                >
                  {skill.icon}
                  <Typography
                    variant="subtitle1"
                    className="anek-devanagari-200"
                    sx={{ marginTop: "2px" }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>
      ))}
    </Box>
  );
}
