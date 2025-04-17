import React from "react";

import { FaReact, FaNode, FaBootstrap, FaHtml5 } from "react-icons/fa";
import {
  SiMongodb,
  SiMui,
  SiGraphql,
  SiJavascript,
  SiCplusplus,
  SiExpress,
  SiTypescript,
  SiPython,
  SiC,
  SiCss3,
  SiGit,
  SiDocker,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const techIconMap = {
  html: { icon: <FaHtml5 color="#e34f26" />, name: "HTML" },
  css: { icon: <SiCss3 color="#1572b6" />, name: "css" },
  tailwind: { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind" },
  bootstrap: { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap" },
  mui: { icon: <SiMui color="#007FFF" />, name: "MUI" },
  react: { icon: <FaReact color="#61DBFB" />, name: "React" },

  node: { icon: <FaNode color="#3C873A" />, name: "Node.js" },
  express: { icon: <SiExpress color="#000000" />, name: "Express.js" },
  graphql: { icon: <SiGraphql color="#E535AB" />, name: "GraphQL" },

  mongodb: { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
  mysql: { icon: <SiMysql color="#00758F" />, name: "MySQL" },

  javascript: { icon: <SiJavascript color="#F0DB4F" />, name: "JavaScript" },
  cplusplus: { icon: <SiCplusplus color="#00599C" />, name: "C++" },
  java: { icon: <DiJava color="#007396" />, name: "Java" },
  c: { icon: <SiC color="#00599c" />, name: "C" },
  python: { icon: <SiPython color="#3776ab" />, name: "Python" },
  typescript: { icon: <SiTypescript color="#3178c6" />, name: "TypeScript" },

  git: { icon: <SiGit color="#F05032" />, name: "Git" },
  docker: { icon: <SiDocker />, name: "Docker" },
};

const iconStyle = {
  fontSize: "2rem",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
};

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const TechStackIcons = ({ stack }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2} alignItems="center">
      {stack?.map((tech) => {
        const item = techIconMap[tech.toLowerCase()];
        if (!item) return null;

        return (
          <BootstrapTooltip title={item.name} key={tech} placement="top">
            <Box component="span" sx={iconStyle}>
              {item.icon}
            </Box>
          </BootstrapTooltip>
        );
      })}
    </Box>
  );
};

export default TechStackIcons;
