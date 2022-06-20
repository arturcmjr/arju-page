import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { themeOptions } from "./shared/theme/muiTheme";
import { Button } from "@mui/material";

const theme = createTheme(themeOptions);
var prevScrollpos = window.pageYOffset;

function App() {
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
  const primary = theme.palette.primary.main;

  return (
    <ThemeProvider theme={theme}>
      <div id="navbar">
        <a href="#home" className="logo">
          <span>ar</span>
          <span>ju</span>
        </a>
        <div className="right">
          <div className="ls-items">
            <a href="#home">
              <span>01:</span>
              About
            </a>
            <a href="#home">
              <span>02:</span>
              Experience
            </a>
            <a href="#home">
              <span>03:</span>
              Projects
            </a>
            <a href="#home">
              <span>04:</span>
              Contact
            </a>
          </div>
        </div>
      </div>
      <h1>test malaka!</h1>
      <p style={{ fontFamily: "Inconsolata", color: primary }}>
        04. bom dia Brasil
      </p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <div style={{ height: "1500px" }}></div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
