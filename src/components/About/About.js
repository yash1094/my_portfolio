import profile_pic from "../../assets/img/profile_pic_small.jpeg";
import Heading from "../Heading";

import "./About.Component.scss";

const About = () => (
  <div id="about" className="about section  ">
    <Heading title="About" />
    <div className="columns is-vcentered">
      <div className="column">
        <figure className="image is-250x250 container img-container">
          <img className="profile_pic" src={profile_pic} alt="yash pandya" />
        </figure>
      </div>
      <div className="column" style={{ textAlign: "left" }}>
        <p className="subtitle">
          Hi, I'm <strong>Yash Pandya</strong>. I'm a computer science student
          and developer that resides around the GTA. My passion lies in
          full-stack development and cloud computing. When I'm not developing
          applications, I like to keep up with any new technologies that relate
          to web development and A.I.
        </p>
        <br />
        <div className="content">
          <h4>
            <a href="#contact">Let's connect</a>
          </h4>
        </div>

        <button className="button is-primary">Resume</button>
      </div>
    </div>
  </div>
);

export default About;
