import Slide from "react-reveal/Slide";
import Frontend from "./content/Frontend";
import Design from "./content/Design";
import Practical from "./content/Practical";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <Slide right>
        <h3>Skills</h3>
        <p className="text-muted">My skills under different categories</p>
        <div className="skills__container">
          <Frontend />
          <Design />
          <Practical />
        </div>
      </Slide>
    </div>
  ); 
}
