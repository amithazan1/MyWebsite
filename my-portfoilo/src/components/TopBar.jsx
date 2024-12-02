import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function TopBar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ background: "primary", height: "6vh", opacity: 0.6 }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Button color="inherit" onClick={() => handleNavigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleNavigate("/about")}>
            About Me
          </Button>
          <Button color="inherit" onClick={() => handleNavigate("/skills")}>
            Skills
          </Button>
          <Button color="inherit" onClick={() => handleNavigate("/projects")}>
            Projects
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
