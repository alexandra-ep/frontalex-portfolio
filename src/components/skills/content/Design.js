import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function Frontend() {
  return (
    <div className="skills__container__design">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="skills__container__design__heading">
              <div className="one">
                <h4><i className="fas fa-swatchbook icon"></i>Design</h4>
              </div>
              <div className="two">
                <i className="fas fa-chevron-down arrow-down"></i>
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>XD</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>UX/UI Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
