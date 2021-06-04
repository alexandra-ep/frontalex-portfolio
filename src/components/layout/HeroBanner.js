import Pulse from "react-reveal/Pulse";
import profile from "../../images/profile.png";

export default function HeroBanner() {
  return (
    <div id="herobanner" className="herobanner">
      <div className="herobanner__content">
        <div className="herobanner__content__img">
          <img
            className="herobanner__content__img--src"
            src={profile}
            alt="FrontAlex Profile Img"
          />
        </div>
        <div className="herobanner__content__text">
          <Pulse>
            <h1>
              Hello, I'm <span className="highlight">Alexandra</span>
            </h1>
            <h2>I'm a web designer & developer</h2>
          </Pulse>
        </div>
      </div>
      <a href="#projects">
        <div className="arrow"></div>
      </a>
    </div>
  );
}
