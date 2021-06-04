import { useState } from "react";
import emailjs from "emailjs-com";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0xgih74",
        "frontalex-template",
        e.target,
        "user_PCLvk9PYQNbNY6JRkfaBb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact__container__content__form">
      <Form onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>How can I help you?</Form.Label>
          <Form.Control as="textarea" rows={4} name="message" required />
        </Form.Group>
        {submitted && (
          <Alert className="success">
            Your message was successfully sent. I will contact you shortly!
          </Alert>
        )}
        <button type="submit">
          Send message <i className="fas fa-paper-plane icon"></i>
        </button>
      </Form>
    </div>
  );
}
