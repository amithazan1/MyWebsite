import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeButton from "../themes/ThemeButton";

export default function TopBar() {
  // navigate between the different pages in the website
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: "primary",
          opacity: 0.6,
          width: "100%", // Ensures full width
          left: 0, // Align to the left edge
          right: 0, // Align to the right edge
        }}
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
          <ThemeButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
