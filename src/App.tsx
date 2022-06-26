import "./App.scss";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IJobTheme from "./common/interfaces/job-theme.interface";
import {
  gameTheme,
  mobileTheme,
  webTheme,
} from "./common/data/job-themes.data";

export enum EJobTitle {
  Web,
  Mobile,
  Game,
}

function getWindowJobTitle(): EJobTitle {
  const path = window.location.pathname.replace("/", "") || "web";
  return getJobTitle(path.toLocaleLowerCase());
}

function scrollTo(elementId: string): void {
  const section = document.querySelector(elementId);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  // TODO: change?
  const windowJob = getWindowJobTitle();
  const [jobTitle, setJobTitle] = React.useState(windowJob);
  const [jobTheme, setJobTheme] = React.useState<IJobTheme>(webTheme);

  let navigate = useNavigate();
  React.useEffect(() => {
    const jobTitle = getWindowJobTitle();
    setJobTitle(jobTitle);
  }, [navigate]);

  useEffect(() => {
    applyTheme(jobTitle);
  }, [jobTitle]);

  const { primaryColor } = jobTheme;

  const themeOptions: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: {
        main: primaryColor,
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

  function changeTheme(jobTitle: EJobTitle): void {
    setJobTitle(jobTitle);
    const path = EJobTitle[jobTitle].toLocaleLowerCase();
    navigate(path);
  }

  function applyTheme(jobTitle: EJobTitle): void {
    switch (jobTitle) {
      case EJobTitle.Web:
        setJobTheme(webTheme);
        break;
      case EJobTitle.Mobile:
        setJobTheme(mobileTheme);
        break;
      case EJobTitle.Game:
        setJobTheme(gameTheme);
        break;
    }
  }

  const theme = createTheme(themeOptions);
  document.documentElement.style.setProperty("--primary", primaryColor);

  return (
    <ThemeProvider theme={theme}>
      <Navbar scrollTo={scrollTo}></Navbar>
      <Introduction changeJobTitle={changeTheme} jobTitle={jobTitle} />
      <About jobTheme={jobTheme}/>
      <div style={{ height: "1500px" }}></div>
      <div id="contact"></div>
    </ThemeProvider>
  );
}

export default App;
