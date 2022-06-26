import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useEffect } from "react";
import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
  scrollTo: (elementId: string) => void;
}

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

var prevScrollpos = window.pageYOffset;

export function Navbar(props: NavbarProps): JSX.Element {
  const { scrollTo } = props;

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    const doc = document.getElementById("navbar");
    if (doc) {
      doc.style.top = prevScrollpos > currentScrollPos ? "0" : "-60px";
      prevScrollpos = currentScrollPos;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div id="navbar">
      <a className="logo" onClick={(event) => scrollTo("#introContainer")}>
        <span>ar</span>
        <span>ju</span>
      </a>
      <div className="right">
        <div className="ls-items">
          {menuItems.map((item, index) => (
            <a
              key={`nv-item-${index}`}
              className="menu-link"
              onClick={() => scrollTo(item.link)}
            >
              <span>0{index + 1}:</span>
              {item.name}
            </a>
          ))}
        </div>
        <SmallScreenMenu scrollTo={scrollTo} />
      </div>
    </div>
  );
}

function SmallScreenMenu(props: NavbarProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const { scrollTo } = props;

  return (
    <div className="menu">
      <IconButton
        color="secondary"
        aria-label="upload picture"
        component="span"
        onClick={handleClick}
      >
        <MenuIcon />
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
          <MenuItem
            onClick={() => {
              handleClose();
              window.setTimeout(() => scrollTo(item.link), 100);
            }}
            key={`mn-item-${index}`}
          >
            <a className="menu-link">
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
