import { Button } from "@mui/material";
import wordsImage from "../images/words.svg";
import "./Introduction.scss";

export function Introduction(): JSX.Element {
  return (
    <div id="introContainer">
      <div className="text-container">
        <div>
          <span className="hi-there">Hi there, my name is</span>
          <h1>Artur Junior</h1>
          <h2>Full Stack Web, Mobile and Game Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            aperiam facilis sint, ipsam consequuntur, temporibus pariatur id
            non, delectus tempora itaque maxime! Natus ipsum alias mollitia
            labore atque, voluptas iusto perspiciatis voluptate dolor tenetur
            illo!
          </p>
          <Button href="#contact" variant="outlined" size="large">HIRE ME</Button>
        </div>
      </div>
      <img src={wordsImage} alt="words" className="words" />
    </div>
  );
}

export default Introduction;
