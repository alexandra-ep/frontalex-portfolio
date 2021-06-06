import Slide from "react-reveal/Slide";
import WebDesign from "./content/WebDesign";
import WebDev from "./content/WebDev";

export default function Services() {
  return (
    <div id="services" className="services">
      <Slide left>
        <h3>Services</h3>
        <p className="muted-text">What I can offer</p>
        <div className="services__container">
          <WebDesign />
          <WebDev />
        </div>
      </Slide>
    </div>
  );
}
