import { Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
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

var prevScrollpos = window.pageYOffset;

export function Navbar(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
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

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    const doc = document.getElementById("navbar");
    if (doc) doc.style.top = "0";
  }, [sidebarOpen]);

  return (
    <div>
      <div id="navbar">
        <div className="background"></div>
        <a className="logo" href="#intro">
          <span>ar</span>
          <span>ju</span>
        </a>
        <div className="nav-links">
          {menuItems.map((item, index) => (
            <a key={`nv-item-${index}`} className="nav-link" href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="resume-container">
          <Button variant="outlined" href="/web/resume.pdf" target="_blank">
            resume
          </Button>
        </div>
        <aside id="sidebar" className={sidebarOpen ? "" : "hidden"}>
          <div className="backdrop"></div>
          <div className="hamburger-container">
            <IconButton
              color="secondary"
              component="span"
              className="hamburger"
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <div className={`icon ${sidebarOpen ? "close" : ""}`}>
                <div></div>
              </div>
            </IconButton>
          </div>
          <div className="sidebar-content">
            {menuItems.map((item, index) => (
              <div
                onClick={() => {
                  setSidebarOpen(false);
                }}
                className="sidebar-link"
                key={`mn-item-${index}`}
              >
                <a href={item.link}>{item.name}</a>
              </div>
            ))}
            <div className="resume-container">
              <Button variant="outlined" href="/web/resume.pdf" target="_blank">
                resume
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Navbar;
