import "./About.scss";
import myPicture from "../../images/my-picture.png";
import { Button, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";
import IJobTheme, { ISkill } from "../../common/interfaces/job-theme.interface";
import EJobTitle from "../../common/enums/job-title.enum";

export function About(props: {
  jobTheme: IJobTheme;
  jobTitle: EJobTitle;
}): JSX.Element {
  const { skills } = props.jobTheme;

  return (
    <div id="about" className="section">
      <div>
        <div className="text-container">
          <h2 className="section-title">
            <span>01:</span> Who I am
          </h2>
          <p>
            Hey there, my name is Artur and I enjoy creating things. My first
            contact with code was with Game Maker back in 2012 which made me
            fall in love with development. Since back there, I have been passing
            through some technologies and other fields of software development.
          </p>
          <AboutJobTitle jobTitle={props.jobTitle} />
          <p>
            I love dogs, music and pizza. In my free time, I enjoy going to the
            gym, playing video games and coding small projects.
          </p>
          <p className="technologies-container">
            Technologies that I have been using lately:
          </p>
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
            <img src={myPicture} alt="My Picture" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutJobTitle(props: { jobTitle: EJobTitle }): JSX.Element {
  const { jobTitle } = props;
  switch (jobTitle) {
    case EJobTitle.Web:
    default:
      return (
        <div>
          <p className="job-text">
            Although I am a full-stack web developer who can work perfectly with
            both back and front end, I rather work with the "muscles" of the
            front. I spend most of my time building with UI kits, but when
            required, I design as well. Still, I usually work with APIs,
            queries, databases or anything that is on the server-side.
          </p>
        </div>
      );
    case EJobTitle.Game:
      return (
        <div>
          <p className="job-text">
            I enjoy playing video games for as far as I can remember. When I
            discovered that I could also make them it was a game-changer in my
            life. Since college, I have been having fun developing some. I have
            spent some years doing it professionally but nowadays is more of a
            hobby.
          </p>
        </div>
      );
  }
}

function SkillChip(props: { skill: ISkill }): JSX.Element {
  return (
    <div className="skill-chip">
      {props.skill.star ? (
        <StarIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
      <span>{props.skill.name}</span>
    </div>
  );
}

export default About;
