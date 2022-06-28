import EJobTitle from "../../common/enums/job-title.enum";
import { Button } from "@mui/material";
import wordsImage from "../../images/words.svg";
import "./Introduction.scss";

interface IntroductionProps {
  jobTitle: EJobTitle;
  changeJobTitle: (title: EJobTitle) => void;
}

export function Introduction(props: IntroductionProps): JSX.Element {
  const { changeJobTitle, jobTitle } = props;

  function renderJobTitle(jobTitle: EJobTitle) : JSX.Element {
    const isActive = jobTitleIsActive(jobTitle);
    return <span onClick={() => changeJobTitle(jobTitle)} className={`job-title ${isActive? 'active' : ''}`}>{EJobTitle[jobTitle]}</span>;
  }

  function jobTitleIsActive(jobTitle: EJobTitle): boolean {
    const currentJob = props.jobTitle;
    return currentJob === jobTitle;
  }

  return (
    <div id="introContainer">
      <div className="text-container">
        <div>
          <span className="hi-there">Hi, my name is</span>
          <h1>Artur Junior</h1>
          <h2>
            {renderJobTitle(EJobTitle.Web)}, {renderJobTitle(EJobTitle.Game)} and {renderJobTitle(EJobTitle.Mobile)} Developer
          </h2>
          <p>
            I'm a software developer who can work well on every development
            layer. I'm currently, studying in Dublin, Ireland and looking for
            opportunities to work locally or remotely anywhere in the world.
          </p>
          <Button href="#contact" variant="outlined" size="large">
            HIRE ME
          </Button>
        </div>
      </div>
      <img src={wordsImage} alt="words" className="words" />
    </div>
  );
}

export default Introduction;
