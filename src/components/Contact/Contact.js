import "./Contact.Components.scss";
import Heading from "../Heading";

const Contact = () => (
  <div id="contact" className="contact section">
    <Heading
      title="Contact"
      subtitle="Feel free to reach out through any platforms listed below"
    />

    <div className="columns ctn">
      <div className="column">
        <a href="mailto:yash1094@gmail.com">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
      <div className="column">
        <a
          href="https://www.linkedin.com/in/yash-pandya-8624b4a8/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <div className="column">
        <a
          href="https://twitter.com/yoshiboi1094"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
      <div className="column">
        <a href="https://github.com/yash1094/" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
