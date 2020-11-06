import "./About.Component.scss";

const About = () => (
  <div id="about" className="about section has-bottom-border ">
    <h1 className="title">About</h1>
    <div className="columns">
      <div className="column">
        <figure className="image container">
          {/* <img
            className="is-rounded"
            src="../assets/img/profile_pic_small.jpeg"a
          /> */}
        </figure>
      </div>
      <div className="column" style={{ textAlign: "left" }}>
        <p className="subtitle ">
          Hi, I'm <strong>Yash Pandya</strong>. I'm a computer science student
          and developer that resides around the GTA. My passion lies in
          full-stack development and cloud computing. When I'm not developing
          applications I like to keep up with any new technologies that relate
          to web development and A.I.
        </p>
        <br />
        <a href="#contact">Let's connect</a>

        <p>list programing skills</p>
        <br />

        <button class="button is-primary">Resume</button>
      </div>
    </div>
  </div>
);

export default About;
