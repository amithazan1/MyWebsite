import { useState } from "react";

import { AppBar, Toolbar, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ThemeButton from "../themes/ThemeButton";

const sections = ["home", "about", "skills", "projects"];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:500px)");

  const toggleDrawer = (state) => () => {
    setDrawerOpen(state);
  };
  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={5}
      sx={{
        backgroundColor: "primary.main",
        opacity: 0.6,
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
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
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section}
                    href={`#${section}`}
                    onClick={() => {
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText primary={section} />
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
            {sections.map((section) => (
              <Button
                className="nunito-400"
                key={section}
                href={`#${section}`}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  scrollBehavior: "smooth",
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
            <ThemeButton />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
