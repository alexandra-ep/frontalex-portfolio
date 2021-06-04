import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function Frontend() {
  return (
    <div className="skills__container__frontend">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          <div className="skills__container__frontend__heading">
              <div className="one">
                <h4><i className="fas fa-code icon"></i>Frontend</h4>
              </div>
              <div className="two">
                <i className="fas fa-chevron-down arrow-down"></i>
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Sass</li>
                <li>Bootstrap</li>
                <li>Strapi</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
