import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { purple } from "@mui/material/colors";

export default function LowerBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ top: "auto", bottom: 0, height: 60, background: purple[900] }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <IconButton aria-label="GitHub" sx={{ color: purple[50] }}>
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" sx={{ color: purple[50] }}>
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
