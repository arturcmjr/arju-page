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
      <Navbar scrollTo={scrollTo}></Navbar>
      <Introduction changeJobTitle={changeTheme} jobTitle={jobTitle} />
      <About jobTitle={jobTitle} />
      <Experience />
      <Projects jobTitle={jobTitle} />
      {/* <div style={{ height: "1500px" }}></div> */}
      <div id="contact"></div>
    </ThemeProvider>
  );
}

export default App;
