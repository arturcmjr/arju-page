// TODO: use module instead
import "./About.scss";
import myPicture from "../../images/profile.png";
import { Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import EJobTitle from "../../common/enums/job-title.enum";
import { getSkills } from "../../common/skills/skills.data";
import ISkill from "../../common/skills/skills.interface";
import { useTranslation } from "react-i18next";

export function About(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  const skills = getSkills(jobTitle);
  const { t } = useTranslation();

  return (
    <section className="about-wrapper">
      <div id="about">
        <div className="text-container">
          <h2 className="section-title">
            <span>01:</span> {t('about.title')}
          </h2>
          <p>{t('about.first')}</p>
          <p className="job-text">{t(`about.second.${EJobTitle[jobTitle].toLowerCase()}`)}</p>
          <p>{t('about.third')}</p>
          <p className="technologies-container">{t('about.technologies')}</p>
          <Grid container spacing={1} columns={{ xs: 2, md: 3 }}>
            {skills.map((skill, index) => (
              <Grid item xs={1} key={`sk-chip-${index}`}>
                <SkillChip skill={skill} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <div className="img-container">
            <div className="underlay"></div>
            <img src={myPicture} alt="me" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillChip(props: { skill: ISkill }): JSX.Element {
  return (
    <div className="skill-chip">
      {props.skill.star ? <StarIcon fontSize="small" /> : <StarOutlineIcon fontSize="small" />}
      <span>{props.skill.name}</span>
    </div>
  );
}

export default About;
