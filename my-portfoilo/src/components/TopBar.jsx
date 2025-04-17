import { useNavigate } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeButton from "../themes/ThemeButton";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function TopBar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:500px)");

  const handleNavigate = (path) => {
    navigate(path);
  };

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About Me", path: "/about" },
    { text: "Skills", path: "/skills" },
    { text: "Projects", path: "/projects" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "primary.main",
          opacity: 0.6,
          width: "100%",
          height: "8%",
          fontSize: { xs: "16px", sm: "18px" }, // Responsive font size
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={toggleDrawer(true)}
                sx={{ position: "absolute", left: 5, p: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      onClick={() => {
                        handleNavigate(item.path);
                        setDrawerOpen(false);
                      }}
                    >
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                  <Divider />
                  <ListItem>
                    <ThemeButton />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.text}
                </Button>
              ))}
              <ThemeButton />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
