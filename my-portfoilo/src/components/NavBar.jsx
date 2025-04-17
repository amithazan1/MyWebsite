import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
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
        opacity: isMobile ? 0.9 : 0.6,
      }}
    >
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ position: "absolute", left: 15, p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List sx={{ width: 200 }}>
                {sections.map((section) => (
                  <ListItem
                    button
                    key={section}
                    component="a"
                    href={`#${section}`}
                    onClick={() => setDrawerOpen(false)}
                    className="spicy-rice-regular"
                    sx={{ color: "text.secondary" }}
                  >
                    <ListItemText
                      primary={
                        section.charAt(0).toUpperCase() + section.slice(1)
                      }
                    />
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
