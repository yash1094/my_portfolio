import crwn_clothing from "../../assets/img/projects/crwn_clothing.png";
import monsters_rolodex from "../../assets/img/projects/monsters_rolodex.png";
import smartq from "../../assets/img/projects/SmartQ.png";
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
          github="https://github.com/yash1094/crwn-clothing"
          demo="https://live-crwnclothing.herokuapp.com/"
        />
        <PortfolioItem
          img_src={monsters_rolodex}
          alt="Monsters_rolodex"
          title="Monsters Rolodex"
          desc="A simple react app that would calls a monters API displays them for the user to see. It also has a search bar that will change the monsters being displayed based off of the user's input"
          techStack={["React"]}
          github="https://github.com/yash1094/monsters-rolodex"
          demo="https://yash1094.github.io/monsters-rolodex/"
        />
        <PortfolioItem
          img_src={smartq}
          alt="SmartQ landing page"
          title="SmartQ Landing page"
          desc="Landing page for an application idea for a coding challenge. Colaborated with 5 other developers to build out a fully functioning site. Application description: 'SmartQ utilizes innovative technology to transfer physical lines into an easy-to-manage electronic queuing system.'"
          techStack={["React"]}
          github="https://github.com/SmartQ-org/Landing-page"
          demo="https://smartq-org.github.io/Landing-page/"
        />
      </div>
    </div>
  </div>
);

export default Portfolio;
