import crwn_clothing from "../../assets/img/projects/crwn_clothing.png";
import monsters_rolodex from "../../assets/img/projects/monsters_rolodex.png";
import PortfolioItem from "../PortfolioItem";
import Heading from "../Heading";

import "./Portfolio.Components.scss";

const Portfolio = () => (
  <div id="portfolio" className="portfolio section has-bottom-border">
    <Heading title="Portfolio" subtitle="A list of my recent projects" />
    <div className="columns">
      <div className="column is-full">
        <PortfolioItem
          img_src={crwn_clothing}
          alt="Crwn_Clothing"
          title="Crwn Clothing"
          desc="A fully functioning mock e-commerce site to sell clothing. The site allows to login and browse the clothing items. They can also add and remove items from their cart and processes fake payments."
          techStack={["React/Redux", "Stripe API", "Firebase (Auth, Database)"]}
        />
        <PortfolioItem
          img_src={monsters_rolodex}
          alt="Monsters_rolodex"
          title="Monsters Rolodex"
          desc="A simple react app that would calls a monters API displays them for the user to see. It also has a search bar that will change the monsters being displayed based off of the user's input"
          techStack={["React"]}
        />
        <PortfolioItem
          img_src={null}
          alt="yash portfolio"
          title="Yash's Porfolio"
          desc="The current site that is being viewed"
          techStack={["React"]}
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
