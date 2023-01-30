import { getAnalytics, logEvent } from "@firebase/analytics";
import { Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import EJobTitle from "../../common/enums/job-title.enum";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";

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

export function Navbar(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  const { t, i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleScroll = () => {
    var currentScrollPos = window.pageYOffset;
    const doc = document.getElementById("navbar");
    if (doc) {
      doc.style.top = prevScrollpos > currentScrollPos ? "0" : "-60px";
      prevScrollpos = currentScrollPos;
    }
  };

  const changeLanguage = () => {
    const language = i18n.language.split('-')[0];
    const newLanguage = language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
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

  const onResumeClick = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "resume_clicked", {
      job_title: EJobTitle[jobTitle],
    });
  };

  const sidebarClass = `${styles.sidebar} ${sidebarOpen ? "" : styles.hidden}`;
  const hamburgerIconClass = `${styles.icon} ${sidebarOpen ? styles.close : ""}`;

  return (
    <div>
      <div id="navbar" className={styles.navbar}>
        <div className={styles.background}></div>
        <a className={styles.logo} href="#intro">
          <span>Artur</span>
          <span>Junior</span>
        </a>
        <div className={styles.linksContainer}>
          {menuItems.map((item, index) => (
            <a key={`nv-item-${index}`} className={styles.navLink} href={item.link}>
              {t(`navbar.items.${item.name.toLowerCase()}`)}
            </a>
          ))}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.language} onClick={changeLanguage}>{t("navbar.alternative_language")}</div>
          <Button
            variant="outlined"
            href={`/${EJobTitle[jobTitle].toLowerCase()}/resume.pdf`}
            target="_blank"
            onClick={onResumeClick}
          >
            {t("navbar.resume")}
          </Button>
        </div>
        <aside id="sidebar" className={sidebarClass}>
          <div className={styles.backdrop}></div>
          <div className={styles.hamburgerContainer}>
            <IconButton
              color="secondary"
              component="span"
              // className={styles.hamburger}
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <div className={hamburgerIconClass}>
                <div></div>
              </div>
            </IconButton>
          </div>
          <div className={styles.sidebarContent}>
            <div className={styles.languageContainer}>
              <div className={styles.language} onClick={changeLanguage}>{t("navbar.alternative_language")}</div>
            </div>
            <div>
              {menuItems.map((item, index) => (
                <div
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                  className={styles.sideLink}
                  key={`mn-item-${index}`}
                >
                  <a href={item.link}>{t(`navbar.items.${item.name.toLowerCase()}`)}</a>
                </div>
              ))}
            </div>
            <div className={styles.resumeContainer}>
              <Button
                variant="outlined"
                href={`/${EJobTitle[jobTitle].toLowerCase()}/resume.pdf`}
                target="_blank"
              >
                {t("navbar.resume")}
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Navbar;
