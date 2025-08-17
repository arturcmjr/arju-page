import { Fragment, useState } from "react";
import "./Experience.scss";
import experiences, { IExperience } from "./experiences";
import { Trans, useTranslation } from "react-i18next";

export function Experience() {
  const [experienceIndex, setExperienceIndex] = useState(-1);
  const experience = experiences[experienceIndex];
  const { t } = useTranslation();
  const handleTimelineMouseLeave = () => {
    setExperienceIndex(-1);
  };

  return (
    <section className="experience-wrapper">
      <div id="experience" >
        <h2 className="section-title">
          <span>02:</span> {t('experience.title')}
        </h2>
        <div className="timeline-container" onMouseLeave={() => handleTimelineMouseLeave()}>
          <div className="timeline">
            <h3>Educação</h3>
            <div className="timeline-item" onMouseEnter={() => setExperienceIndex(0)}>
              <span className="title">
                Pós Graduação
              </span>
              <div className="subtitle">
                Desenvolvimento de aplicativos para dispositivos móveis
              </div>
            </div>
            <div className="timeline-item" onMouseEnter={() => setExperienceIndex(1)}>
              <span className="title">
                Tecnólogo
              </span>
              <div className="subtitle">
                Desenvolvimento de Jogos Digitais
              </div>
            </div>
            <div className="timeline-item" onMouseEnter={() => setExperienceIndex(2)}>
              <span className="title">
                Bacharelado
              </span>
              <div className="subtitle">
                Ciências da Computação
              </div>
            </div>
          </div>
          <Details experience={experience} />
        </div>
      </div>
    </section >
  );
}

function Details(
  props: {
    experience?: IExperience;
  }
) {
  const { experience } = props;
  if (!experience) {
    return null;
  } else {
    return <div className="details"><Trans i18nKey={`experience.experiences.${experience.translationKey}.content`}></Trans></div>;
  }
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
      <span>{experience.company}</span>
    </div>
  );
}

export default Experience;
