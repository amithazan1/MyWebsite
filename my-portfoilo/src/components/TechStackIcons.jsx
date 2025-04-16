import React from "react";
import { FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import {
  SiMongodb,
  SiMui,
  SiGraphql,
  SiJavascript,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const techIconMap = {
  react: { icon: <FaReact color="#61DBFB" />, name: "React" },
  node: { icon: <FaNode color="#3C873A" />, name: "Node.js" },
  express: { icon: <SiExpress color="#000000" />, name: "Express.js" },
  mongodb: { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
  bootstrap: { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap" },
  mui: { icon: <SiMui color="#007FFF" />, name: "MUI" },
  graphql: { icon: <SiGraphql color="#E535AB" />, name: "GraphQL" },
  javascript: { icon: <SiJavascript color="#F0DB4F" />, name: "JavaScript" },
  cplusplus: { icon: <SiCplusplus color="#00599C" />, name: "C++" },
  java: { icon: <DiJava color="#007396" />, name: "Java" },
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
