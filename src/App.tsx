import "./App.scss";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material";
// import { themeOptions } from "./shared/theme/muiTheme";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import React from "react";

export enum EJobTitle {
  Web,
  Mobile,
  Game,
}

function App() {
  const [primary, setPrimary] = React.useState("#4ecca3");
  const scrollTo = (elementId: string) => {
    const section = document.querySelector(elementId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log(section);
  };

  const themeOptions: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: primary,
      },
      secondary: {
        main: "#eeeeee",
      },
      background: {
        paper: "#393e46",
        default: "#232931",
      },
    },
  };

  function getJobTitle() : EJobTitle {
    switch (primary) {
      case "#4ecca3":
        return EJobTitle.Web;
      case "#d8abeb":
        return EJobTitle.Mobile;
      case "#f5a623":
        return EJobTitle.Game;
      default:
        return EJobTitle.Web;
    }
  }

  function changeJobTitle(title: EJobTitle): void {
    switch (title) {
      case EJobTitle.Web:
        setPrimary("#4ecca3");
        break;
      case EJobTitle.Mobile:
        setPrimary("#d8abeb");
        break;
      case EJobTitle.Game:
        setPrimary("#f9a825");
        break;
    }
  }

  const theme = createTheme(themeOptions);
  document.documentElement.style.setProperty("--primary", primary);

  return (
    <ThemeProvider theme={theme}>
      <Navbar scrollTo={scrollTo}></Navbar>
      <Introduction changeJobTitle={changeJobTitle} jobTitle={getJobTitle()} />
      <About />
      <div style={{ height: "1500px" }}></div>
      <div id="contact"></div>
      {/* <TitleAction /> */}
    </ThemeProvider>
  );
}

export default App;
