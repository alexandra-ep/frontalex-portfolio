import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default function Practical() {
  return (
    <div className="skills__container__practical">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className="skills__container__design__heading">
              <div className="one">
                <h4>
                  <i className="fas fa-mail-bulk icon"></i>Practical
                </h4>
              </div>
              <div className="two">
                <i className="fas fa-chevron-down arrow-down"></i>
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>GitHub</li>
                <li>Chrome DevTools</li>
                <li>FileZilla</li>
                <li>BEM</li>
                <li>VsCode</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
