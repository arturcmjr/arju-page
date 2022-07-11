import "./App.scss";
import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material";
import About from "./components/About/About";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IJobTheme from "./common/job-themes/job-theme.interface";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";
import EJobTitle from "./common/enums/job-title.enum";
import JobInstructionsOverlay from "./components/JobOverlay/JobInstructionsOverlay";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { getTheme } from "./common/job-themes/job-themes.data";
import Contact from "./components/Contact/Contact";
import SocialMedia from "./components/SocialMedia/SocialMedia";

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
  // TODO: change?
  const windowJob = getWindowJobTitle();
  const [jobTitle, setJobTitle] = React.useState(windowJob);
  const jbTheme = getTheme(jobTitle);
  const [jobTheme, setJobTheme] = React.useState<IJobTheme>(jbTheme);

  let navigate = useNavigate();
  React.useEffect(() => {
    const jobTitle = getWindowJobTitle();
    setJobTitle(jobTitle);
  }, [navigate]);

  useEffect(() => {
    setJobTheme(jbTheme);
  }, [jobTitle, jbTheme]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if(!hash) return;
    const element = document.querySelector(`#${hash}`);
    if (!element) return;
    setTimeout(function () {
      element.scrollIntoView();
    }, 20);
  }, []);

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
      error: {
        main: "#ed4242",
      },
    },
  };

  const faviconEl = document.getElementById("favicon") as HTMLLinkElement;
  const jobThemeStr = EJobTitle[jobTitle].toLowerCase();
  faviconEl.href = `icons/${jobThemeStr}.png`;

  function changeTheme(jobTitle: EJobTitle): void {
    setJobTitle(jobTitle);
    const path = EJobTitle[jobTitle].toLowerCase();
    navigate(path);
  }

  const theme = createTheme(themeOptions);
  document.documentElement.style.setProperty("--primary", primaryColor);

  return (
    <ThemeProvider theme={theme}>
      <JobInstructionsOverlay />
      <Navbar />
      <Introduction changeJobTitle={changeTheme} jobTitle={jobTitle} />
      <About jobTitle={jobTitle} />
      <Experience />
      <Projects jobTitle={jobTitle} />
      <Contact jobTitle={jobTitle} />
      <SocialMedia />
    </ThemeProvider>
  );
}

export default App;
