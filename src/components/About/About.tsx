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

function AboutJobTitle(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  const { t } = useTranslation();

  switch (jobTitle) {
    case EJobTitle.Web:
    default:
      return (
        <div>
          <p className="job-text">
            Although I am a full-stack web developer who can work perfectly with both the back and
            front end, lately, I've been working mainly with the "muscles" of the interfaces. I'm
            used to building APPs with available UI kits. However, when required, I design as well.
            On the server side, I care a lot about security and following good practices to prevent
            future problems.
          </p>
        </div>
      );
    case EJobTitle.Game:
      return (
        <div>
          <p className="job-text">
            I enjoy playing video games for as far as I can remember. When I discovered that I could
            also make them it was a game-changer in my life. Since college, I have been having fun
            developing some. I have spent some years doing it professionally but nowadays is more of
            a hobby.
          </p>
        </div>
      );
  }
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
