import EJobTitle from "../../common/enums/job-title.enum";
import { Button } from "@mui/material";
import wordsImage from "../../images/words.svg";
import styles from "./Introduction.module.scss";
import { getAnalytics, logEvent } from "@firebase/analytics";
import { Trans, useTranslation } from "react-i18next";

interface IntroductionProps {
  jobTitle: EJobTitle;
  changeJobTitle: (title: EJobTitle) => void;
}

export function Introduction(props: IntroductionProps) {
  const { changeJobTitle } = props;
  const { t } = useTranslation();

  function renderJobTitle(jobTitle: EJobTitle) {
    const isActive = jobTitleIsActive(jobTitle);
    const changeTitle = (jobTitle: EJobTitle) => {
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
        {EJobTitle[jobTitle]}
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
            {renderJobTitle(EJobTitle.Web)} {t("introduction.job_separator")}{" "}
            {renderJobTitle(EJobTitle.Game)} Developer
          </h2>
          <p>
            <Trans 
              i18nKey={`introduction.short`} 
              values={{ company: 'Autotrac'}}
              components={[<a target='_blank' rel="noreferrer" href="https://www.autotrac.com.br/"></a>]} // eslint-disable-line
            ></Trans>
          </p>
          <Button href="#contact" variant="outlined" size="large">
            {t("introduction.contact_me")}
          </Button>
        </div>
      </div>
      <img src={wordsImage} alt="words" className={styles.wordsImage} />
    </div>
  );
}

export default Introduction;
