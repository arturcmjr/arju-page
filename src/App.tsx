import "./App.scss";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material";
// import { themeOptions } from "./shared/theme/muiTheme";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import React, { useEffect } from "react";

export enum EJobTitle {
  Web,
  Mobile,
  Game,
}

function getWindowJobTitle(): EJobTitle {
  const path = window.location.pathname.replace("/", "") || "web";
  return getJobTitle(path.toLocaleLowerCase());
}

function getJobTitle(title: string): EJobTitle {
  switch (title) {
    case "web":
      return EJobTitle.Web;
    case "mobile":
      return EJobTitle.Mobile;
    case "game":
      return EJobTitle.Game;
    default:
      return EJobTitle.Web;
  }
}

function App() {
  const [primary, setPrimary] = React.useState("#4ecca3");
  const [jobTitle, setJobTitle] = React.useState(EJobTitle.Web);

  useEffect(() => {
    const title = getWindowJobTitle();
    setJobTitle(title);
  }, []);

  useEffect(() => {
    changeJobTitle(jobTitle);
  }, [jobTitle]);

  function scrollTo(elementId: string) : void {
    const section = document.querySelector(elementId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
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

  function getJobTitle(): EJobTitle {
    switch (primary) {
      case "#4ecca3":
        return EJobTitle.Web;
      case "#c2a5e7":
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
        setPrimary("#c2a5e7");
        break;
      case EJobTitle.Game:
        setPrimary("#f9a825");
        break;
    }
    window.history.pushState({}, '', EJobTitle[title].toLocaleLowerCase());
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
