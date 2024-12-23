import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
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

export default function Skills() {
  const isMobile = useMediaQuery("(max-width:500px)");
  const categories = {
    Databases: [
      {
        name: "MongoDB",
        icon: <SiMongodb color="#47a248" size={isMobile ? 30 : 50} />,
      },
      {
        name: "MySQL",
        icon: <SiMysql color="#4479a1" size={isMobile ? 30 : 50} />,
      },
    ],
    "Web Development Tools": [
      {
        name: "React",
        icon: <FaReact color="#61dafb" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs color="#83cd29" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Express",
        icon: <SiExpress color="white" size={isMobile ? 30 : 50} />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql color="#e10098" size={isMobile ? 30 : 50} />,
      },
    ],
    Languages: [
      {
        name: "JavaScript",
        icon: <SiJavascript color="#f7df1e" size={isMobile ? 30 : 50} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript color="#3178c6" size={isMobile ? 30 : 50} />,
      },
      { name: "C", icon: <SiC color="#00599c" size={isMobile ? 30 : 50} /> },
      {
        name: "C++",
        icon: <SiCplusplus color="#00599c" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Java",
        icon: <FaJava color="#007396" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Python",
        icon: <SiPython color="#3776ab" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Assembly",
        icon: <SiAssemblyscript color="#ffa500" size={isMobile ? 30 : 50} />,
      },
    ],
    "Front-End": [
      {
        name: "CSS3",
        icon: <SiCss3 color="#1572b6" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Material-UI",
        icon: (
          <img
            src="mui.svg"
            height={isMobile ? 30 : 50}
            width={isMobile ? 30 : 50}
          />
        ),
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap color="#7952b3" size={isMobile ? 30 : 50} />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 color="#e34f26" size={isMobile ? 30 : 50} />,
      },
    ],
    "Version Control": [
      {
        name: "Git",
        icon: <SiGit color="#f05032" size={isMobile ? 30 : 50} />,
      },
      {
        name: "Docker",
        icon: <SiDocker color="#2496ed" size={isMobile ? 30 : 50} />,
      },
    ],
  };

  return (
    <Box
      component="div"
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      sx={{
        position: "relative",
        top: "8vh",
        textAlign: isMobile ? "" : "center",
      }}
    >
      {Object.keys(categories).map((category) => (
        <Box
          key={category}
          sx={{
            width: "90%",
            padding: "5px",
            overflowX: "auto",
            whiteSpace: "nowrap",
            borderRadius: isMobile ? "8px" : "",
            boxShadow: isMobile ? "0px 4px 12px rgba(0, 0, 0, 0.5)" : "",
            margin: isMobile ? "5px" : "0px",
          }}
        >
          <Typography
            className="nunito-400"
            variant="h5"
            gutterBottom
            color="primary"
            sx={{ fontSize: { xs: "16px", sm: "18px" } }}
          >
            {category}
          </Typography>
          <Stack
            useFlexGap
            direction={"row"}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: isMobile ? "flex-start" : "center",
              alignItems: "center",
              overflowX: isMobile ? "auto" : "visible",
              flexWrap: isMobile ? "nowrap" : "wrap",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categories[category].map((skill, index) => (
              <Box
                key={index}
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
                }}
              >
                {skill.icon}
                <Typography
                  variant="subtitle1"
                  className="anek-devanagari-200"
                  sx={{
                    marginTop: "2px",
                    fontSize: () => (isMobile ? "14px" : "16px"),
                  }}
                >
                  {skill.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}
