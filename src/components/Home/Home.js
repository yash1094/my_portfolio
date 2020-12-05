import ReactTypingEffect from "react-typing-effect";
import "./Home.Component.scss";

const Home = () => (
  <section id="home" class="hero home section has-bottom-border">
    <div className="home-cover">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello, I am Yash Pandya</h1>
          <h2 className="subtitle">
            I am a &nbsp;
            <ReactTypingEffect
              text={[
                "Web/Mobile Developer",
                "Computer Science Student",
                "ML/AI Hobbyist",
                "Tech Enthusiast",
              ]}
            />
          </h2>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
