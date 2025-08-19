import { Fragment, useState } from "react";
import "./Experience.scss";
import experiences, { IExperience } from "./experiences";
import { Trans, useTranslation } from "react-i18next";
import { work, education } from "./experiences_new";

export function Experience() {
  const { t } = useTranslation();

  return (
    <section className="experience-wrapper">
      <div id="experience" >
        <h2 className="section-title">
          <span>02:</span> {t('experience.title')}
        </h2>
        <div className="timeline-container">
          <div className="timeline">
            <h3>{t('experience.education')}</h3>
            {education.map((item, index) => (
              <div className="timeline-item" key={index}>
                <span className="title"><Trans i18nKey={`experience.experiences.${item.key}.title`} /></span>
                <div className="subtitle"><Trans i18nKey={`experience.experiences.${item.key}.subtitle`} /></div>
                <div className="extra">
                  <span>{item.company}</span>
                  <span>{item.dateRange}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="timeline right">
            <h3>{t('experience.work')}</h3>
            {work.map((item, index) => (
              <div className="timeline-item" key={index}>
                <span className="title"><Trans i18nKey={`experience.experiences.${item.key}.title`} /></span>
                <div className="subtitle"><Trans i18nKey={`experience.experiences.${item.key}.subtitle`} /></div>
                <div className="extra">
                  <span>{item.company}</span>
                  <span>{item.dateRange}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}

/* function Details(
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
} */

export default Experience;
