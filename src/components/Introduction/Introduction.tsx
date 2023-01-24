import EJobTitle from "../../common/enums/job-title.enum";
import { Button } from "@mui/material";
import wordsImage from "../../images/words.svg";
import styles from "./Introduction.module.scss";
import { getAnalytics, logEvent } from "@firebase/analytics";
import { useTranslation } from "react-i18next";

interface IntroductionProps {
  jobTitle: EJobTitle;
  changeJobTitle: (title: EJobTitle) => void;
}

export function Introduction(props: IntroductionProps): JSX.Element {
  const { changeJobTitle } = props;
  const { t, i18n } = useTranslation();

  function renderJobTitle(jobTitle: EJobTitle): JSX.Element {
    const isActive = jobTitleIsActive(jobTitle);
    const changeTitle = (jobTitle: EJobTitle) => {
      switch (jobTitle) {
        case EJobTitle.Game:
          i18n.changeLanguage("pt");
          break;
        case EJobTitle.Web:
          i18n.changeLanguage("en");
          break;
      }
      changeJobTitle(jobTitle);
      const analytics = getAnalytics();
      logEvent(analytics, "job_changed", {
        job_title: EJobTitle[jobTitle],
      });
    };

    return (
      <span
        onClick={() => changeTitle(jobTitle)}
        className={`job-title ${isActive ? "active" : ""}`}
      >
        {t("introduction.job." + EJobTitle[jobTitle].toLowerCase())}
      </span>
    );
  }

  function jobTitleIsActive(jobTitle: EJobTitle): boolean {
    const currentJob = props.jobTitle;
    return currentJob === jobTitle;
  }

  return (
    <div id="intro" className={styles.container}>
      <div className={styles.introTextContainer}>
        <div>
          <span className={styles.greeting}>{t("introduction.hi")}</span>
          <h1>Artur Junior</h1>
          <h2>
            {t("introduction.job.before")}
            {renderJobTitle(EJobTitle.Web)} {t("introduction.job.and")}{" "}
            {renderJobTitle(EJobTitle.Game)} {t("introduction.job.after")}
          </h2>
          <p>{t("introduction.short")}</p>
          <Button href="#contact" variant="outlined" size="large">
            HIRE ME
          </Button>
        </div>
      </div>
      <img src={wordsImage} alt="words" className={styles.wordsImage} />
    </div>
  );
}

export default Introduction;
