import { Button } from "@mui/material";
import wordsImage from "../images/words.svg";
import "./Introduction.scss";

export function Introduction(): JSX.Element {
  return (
    <div id="introContainer">
      <div className="text-container">
        <div>
          <span className="hi-there">Hi, my name is</span>
          <h1>Artur Junior</h1>
          <h2>Web, Mobile and Game Developer</h2>
          <p>
            I'm a software developer who can work well on every development
            layer. I'm currently, studying in Dublin, Ireland and looking for
            opportunities to work locally or remotely anywhere in the world.
          </p>
          <Button href="#contact" variant="outlined" size="large">
            HIRE ME
          </Button>
        </div>
      </div>
      <img src={wordsImage} alt="words" className="words" />
    </div>
  );
}

export default Introduction;
