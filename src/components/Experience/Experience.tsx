import { Fragment, useState } from "react";
import "./Experience.scss";
import experiences, { IExperience } from "./experiences";
import { Trans, useTranslation } from "react-i18next";

export function Experience() {
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
            <h3>{t(`experience.experiences.${experience.translationKey}.subtitle`)}<small> {t('experience.at')} {experience.company}</small></h3>
            <div className="period">{experience.dateRange.replace('{NOW}', t('common.date.present'))}</div>
            <Trans i18nKey={`experience.experiences.${experience.translationKey}.content`}></Trans>
            <div className="key-tech">
              {experience.keyTech.map((tech, index) => (
                <span key={`tech-${index}`} className="tech">{tech}</span>
              ))}
            </div>
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
}) {
  const { experience, isActive, onClick } = props;
  const tabClass = `tab ${isActive ? "active" : ""}`;

  return (
    <div className={tabClass} onClick={onClick}>
      {experience.icon}
      <span><Trans i18nKey={`experience.experiences.${experience.translationKey}.title`}/></span>
    </div>
  );
}

export default Experience;
