import Slide from "react-reveal/Slide";
import Text from "./content/Text";
import Image from "./content/Image";
import { Insta } from "./content/Insta";

export default function About() {
  return (
    <div id="about" className="about">
      <Slide right>
        <h3>About</h3>
        <p className="text-muted">Get to know me</p>
        <div className="about__container">
          <Text />
          <Image />
        </div>
        <div className="about__insta"> 
          <h3>Instagram</h3>
          <p className="text-muted">A part of my life</p>
          <Insta />
        </div>
      </Slide>
    </div>
  );
}
