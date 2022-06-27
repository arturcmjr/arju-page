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
  const [showMore, setShowMore] = React.useState(false);
  const { skills } = props.jobTheme;
  const minAmount = skills.length >= 4 ? 4 : skills.length;
  const arrayLimit = showMore ? skills.length : minAmount;

  return (
    <div id="about">
      <div>
        <div className="text-container">
          <h2>
            <span>01:</span> Who I am
          </h2>
          <p>
            Hi there, my name is Artur and I enjoy creating things. My first
            contact with code was with Game Maker back in 2012 which made me
            fall in love with game development. Since back there, I have been
            passing through some technologies and other fields of software
            development.
          </p>
          <AboutJobTitle jobTitle={props.jobTitle} />
          <p className="technologies-container">
            Technologies that I mostly use:
          </p>
          <Grid container spacing={1} columns={{ xs: 2, md: 4 }}>
            {Array.from(Array(arrayLimit)).map((_, index) => (
              <Grid item xs={1} key={`sk-chip-${index}`}>
                <SkillChip skill={skills[index]} />
              </Grid>
            ))}
          </Grid>
          <Button
            variant="outlined"
            color="secondary"
            className="btn-show-more"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Show more"}
          </Button>
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
          <p>
            Although I am a full-stack web developer who can work perfectly with
            both back and front end, I rather work with the "muscles" of the
            front. I spend most of my time building with UI kits, but when
            required, I design as well. Still, I usually work with APIs,
            queries, databases or anything that is on the server-side.
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
