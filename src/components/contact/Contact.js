import SoMe from "./content/SoMe";
import ContactForm from "./content/ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <h3>Contact</h3>
        <p className="muted-text">Get In Touch</p>
        <div className="contact__container__content">
          <SoMe />
          <ContactForm />
        </div>
      </div>
      <div className="contact__copy">
        <p>Copyright © 2021 Alexandra Pettersen</p>
      </div>
    </div>
  );
}
