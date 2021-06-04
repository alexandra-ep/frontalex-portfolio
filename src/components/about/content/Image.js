import profile from "../../../images/profile.png";

export default function Image() {
  return (
    <div className="about__container__img">
      <img
        className="about__container__img--src"
        src={profile}
        alt="My profile img"
      />
    </div>
  );
}
