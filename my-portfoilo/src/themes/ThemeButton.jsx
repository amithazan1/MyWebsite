import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useThemeUpdate } from "./ThemeContext";

const ThemeButton = () => {
  const updateTheme = useThemeUpdate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (option) => {
    setAnchorEl(null); // Close the menu
    updateTheme(option); // Update the theme
  };

  return (
    <>
      <Button
        id="themes-button"
        aria-controls={open ? "themes-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Themes
      </Button>
      <Menu
        id="themes-menu"
        MenuListProps={{
          "aria-labelledby": "themes-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleMenuClick("Beauty and the Beast")}
          disableRipple
        >
          Beauty and the Beast
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("Frozen")} disableRipple>
          Frozen
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("Wicked")} disableRipple>
          Wicked
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeButton;
