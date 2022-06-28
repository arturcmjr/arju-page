import { Grow } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import "./Experience.scss";
import experiences, { IExperience } from "./experiences";

export function Experience(): JSX.Element {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const currentExperience = experiences[experienceIndex];
  // const [showContent, setShowContent] = useState(true);

  // useEffect(() => {
  //   setShowContent(false);
  //   setTimeout(() => {
  //     setShowContent(true);
  //   }, 500);
  // }, [currentExperience]);

  return (
    <div id="experience" className="section">
      <div>
        <h2 className="section-title">
          <span>02:</span> Experience and Work
        </h2>
        <div className="content">
          <div className="tabs">
            {experiences.map((item, index) => (
              <Fragment key={`smp-tab-${index}`}>
                <ExperienceTab
                  experience={item}
                  isActive={index === experienceIndex}
                  onClick={() => setExperienceIndex(index)}
                />
              </Fragment>
            ))}
          </div>
          <TextContainer experience={currentExperience} />
        </div>
      </div>
    </div>
  );
}

function TextContainer(props: { experience: IExperience }): JSX.Element {
  const { experience } = props;
  return (
    <div className="text-container" key={experience.company}>
      <div className="mobile-company">{experience.company}</div>
      <h3>{experience.title}</h3>
      <div className="period">{experience.dateRange}</div>
      {experience.content}
    </div>
  );
}

function ExperienceTab(props: {
  experience: IExperience;
  isActive: boolean;
  onClick: React.MouseEventHandler;
}): JSX.Element {
  const { experience, isActive, onClick } = props;
  const tabClass = `tab ${isActive ? "active" : ""}`;

  return (
    <div className={tabClass} onClick={onClick}>
      {experience.icon}
      <span>{experience.company}</span>
    </div>
  );
}

export default Experience;
