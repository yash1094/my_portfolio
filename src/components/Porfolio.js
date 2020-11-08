import Heading from "./Heading";
import crwn_clothing from "../assets/img/projects/crwn_clothing.png";
// import monsters_rolodex from "../assets/img/projects/monsters_rolodex.png";

import "./Portfolio.Components.scss";

const Portfolio = () => (
  <div id="portfolio" className="portfolio section has-bottom-border">
    <Heading title="Portfolio" subtitle="A list of my recent projects" />
    <div className="columns">
      <div className="column is-full">
        <div className="box">
          <div className="columns is-vcentered">
            <div className="column">
              <figure className="image project-img-container">
                <img src={crwn_clothing} alt="cwrn_clothing screenshot" />
              </figure>
            </div>
            <div className="column">
              <div className="content has-text-left">
                <h3>Dummy e-commerce site</h3>
                <p>
                  A Fully functioning mock ecommerce site to sell clothing.
                  {/* <ul style={{ listStyleType: "none" }}>
                    Technologies stack used to build this app:
                    <li>React</li>
                    <li>Stripe API</li>
                  </ul> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
