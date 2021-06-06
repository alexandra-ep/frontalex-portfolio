import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProjectItems } from "./ProjectItems";

export default function Projects() {
  return (
    <div id="projects" className="projects">
      <h3>Projects</h3>
      <p className="muted-text">My recent work</p>
      <Row xs={1} md={2} lg={2} xl={3} className="projects__list">
        {ProjectItems.map((item, index) => {
          return (
            <Col className={item.cName} key={index}>
              <img
                className="projects__list__item__img"
                src={item.image}
                alt={item.title}
              />
              <div className="projects__list__item--details">
                <h4>{item.title}</h4>
                <h5>{item.type}</h5>
                <span>{item.tags}</span>
                <a href={item.url}>Visit website</a>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
