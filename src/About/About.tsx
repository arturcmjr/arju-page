import "./About.scss";
import myPicture from "../images/my-picture.png";
import { Button, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";
import IJobTheme, { ISkill } from "../common/interfaces/job-theme.interface";

export function About(props: { jobTheme: IJobTheme }): JSX.Element {
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
            Hi there, my name is Artur and I enjoy creating things since I
            remember. My first contact with code was with game maker which made
            me fall in love with game development. Since back there, I have been
            passing through some technologies and other fields of software
            development.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quas
            quisquam impedit aliquid quo dolorum qui earum reprehenderit hic
            aliquam. Consequuntur molestiae, a suscipit molestias quos earum.
            Numquam aut ipsa, hic molestias dicta eveniet quae, modi
            voluptatibus adipisci excepturi labore! Vero laudantium dolorem
            earum similique fugit deleniti eius harum autem.
          </p>
          <p className="technologies-container">Technologies:</p>
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
