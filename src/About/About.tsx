import "./About.scss";
import myPicture from "../images/my-picture.png";
import { Button, Chip, Grid, Tooltip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";
import { ISkill, skills } from "./skills";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import LanguageIcon from "@mui/icons-material/Language";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

export function About(): JSX.Element {
  const [showMore, setShowMore] = React.useState(false);
  const arrayLimit = showMore ? skills.length : 4;

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
            <img src={myPicture} alt="My Picture" />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillChip(props: { skill: ISkill }): JSX.Element {
  let icon: JSX.Element;
  let iconTooltip: string;

  switch (props.skill.type) {
    case "web":
      icon = <LanguageIcon fontSize="small" className="skill-icon" />;
      iconTooltip = "Web";
      break;
    case "mobile":
      icon = <SmartphoneIcon fontSize="small" className="skill-icon" />;
      iconTooltip = "Mobile";
      break;
    case "game":
      icon = <VideogameAssetIcon fontSize="small" className="skill-icon" />;
      iconTooltip = "Game";
      break;
  }

  return (
    <div className="skill-chip">
      {props.skill.star ? (
        <StarIcon fontSize="small" />
      ) : (
        <StarOutlineIcon fontSize="small" />
      )}
      <span>{props.skill.name}</span>
      <Tooltip title={iconTooltip} placement="top">
        {icon}
      </Tooltip>
    </div>
  );
}

export default About;
