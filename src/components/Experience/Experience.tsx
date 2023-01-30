import { Fragment, useState } from "react";
import "./Experience.scss";
import experiences, { IExperience } from "./experiences";
import { Trans, useTranslation } from "react-i18next";

export function Experience(): JSX.Element {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const experience = experiences[experienceIndex];
  const { t } = useTranslation();

  return (
    <section className="experience-wrapper">
      <div id="experience" >
        <h2 className="section-title">
          <span>02:</span> {t('experience.title')}
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
          <div className="text-container" key={experience.company}>
            <div className="mobile-company">{experience.company}</div>
            <h3>{t(`experience.experiences.${experience.translationKey}.title`)}</h3>
            <div className="period">{experience.dateRange}</div>
            <Trans>{t(`experience.experiences.${experience.translationKey}.content`)}</Trans>
          </div>
        </div>
      </div>
    </section>
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
