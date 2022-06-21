import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import "./Navbar.scss";

const menuItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export function Navbar(): JSX.Element {
  return (
    <div id="navbar">
      <a href="#home" className="logo">
        <span>ar</span>
        <span>ju</span>
      </a>
      <div className="right">
        <div className="ls-items">
          {menuItems.map((item, index) => (
            <a href={item.link} key={index} className="menu-link">
              <span>0{index + 1}:</span>
              {item.name}
            </a>
          ))}
        </div>
        <SmallScreenMenu />
      </div>
    </div>
  );
}

function SmallScreenMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu">
      <IconButton
        color="secondary"
        aria-label="upload picture"
        component="span"
        onClick={handleClick}
      >
        <span className="material-symbols-outlined">menu</span>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem onClick={handleClose}>
            <a href={item.link} key={index} className="menu-link">
              <span>0{index + 1}:</span>
              <br />
              {item.name}
            </a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
