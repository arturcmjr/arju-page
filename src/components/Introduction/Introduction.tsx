import EJobTitle from "../../common/enums/job-title.enum";
import { Button } from "@mui/material";
import wordsImage from "../../images/words.svg";
import styles from "./Introduction.module.scss";

interface IntroductionProps {
  jobTitle: EJobTitle;
  changeJobTitle: (title: EJobTitle) => void;
}

export function Introduction(props: IntroductionProps): JSX.Element {
  const { changeJobTitle } = props;

  function renderJobTitle(jobTitle: EJobTitle): JSX.Element {
    const isActive = jobTitleIsActive(jobTitle);
    return (
      <span
        onClick={() => changeJobTitle(jobTitle)}
        className={`${styles.jobTitle} ${isActive ? styles.active : ""}`}
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
          <span className={styles.greeting}>Hi, my name is</span>
          <h1>Artur Junior</h1>
          <h2>
            {renderJobTitle(EJobTitle.Web)} and {renderJobTitle(EJobTitle.Game)} Developer
          </h2>
          <p>
            I'm a software developer who can work well on every development layer. I'm currently
            studying in Dublin, Ireland and open to job offers nearby.
          </p>
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
