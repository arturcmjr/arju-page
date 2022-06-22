import "./About.scss";
import myPicture from "../images/my-picture.png";
import { Button, Chip, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";

interface ISkill {
  name: string;
  star: boolean;
}

const skills: ISkill[] = [
  {
    name: "HTML",
    star: true,
  },
  {
    name: "CSS",
    star: false,
  },
  {
    name: "SCSS",
    star: false,
  },
  {
    name: "JavaScript",
    star: false,
  },
  {
    name: "TypeScript",
    star: true,
  },
  {
    name: "React",
    star: false,
  },
  {
    name: "Angular",
    star: true,
  },
  {
    name: "Vue",
    star: false,
  },
  {
    name: "Node",
    star: false,
  },
  {
    name: "Git",
    star: false,
  },
  {
    name: "Unity",
    star: true,
  },
  {
    name: "C#",
    star: true,
  },
  {
    name: "Java",
    star: false,
  },
  {
    name: "PHP",
    star: false,
  },
  {
    name: "SQL",
    star: true,
  },
  {
    name: ".NET",
    star: true,
  },
  {
    name: "Laravel",
    star: false,
  },
  {
    name: "Express",
    star: false,
  },
  {
    name: "Flutter",
    star: false,
  },
  {
    name: "Android Native",
    star: false,
  },
  {
    name: "Dart",
    star: false,
  },
  {
    name: "Bash/Shell",
    star: false,
  },
];

export function About(): JSX.Element {
  // showMore is a boolean that indicates if the skills are shown or not
  const [showMore, setShowMore] = React.useState(false);
  const arrayLimit = showMore ? skills.length : 8;

  return (
    <div id="about">
      <div>
        <div className="text-container">
          <h2>
            <span>01:</span> Who I am
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis aut
            quia explicabo, animi et est quos, nisi placeat reiciendis aliquid,
            asperiores facilis minus id culpa ipsum accusamus neque. A nulla,
            quos mollitia error nesciunt eligendi pariatur veniam molestias
            eaque ratione?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            sapiente fugiat ducimus. Quod assumenda libero illum. Commodi quam
            modi a.
          </p>
          <p>Technologies:</p>
          <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 4 }}>
            {Array.from(Array(arrayLimit)).map((_, index) => (
              <Grid item xs={2} sm={4} md={1} key={`sk-chip-${index}`}>
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
