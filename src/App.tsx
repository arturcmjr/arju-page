import { useEffect } from "react";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./shared/theme/muiTheme";
import { Button } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";

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

  const scrollTo = (elementId: string) => {
    const section = document.querySelector(elementId);
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    console.log(section);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const primary = theme.palette.primary.main;

  return (
    <ThemeProvider theme={theme}>
      <Navbar scrollTo={scrollTo}></Navbar>
      <Introduction />
      <About />
      <div style={{ height: "1500px" }}></div>
      <div id="contact"></div>
    </ThemeProvider>
  );
}

export default App;
