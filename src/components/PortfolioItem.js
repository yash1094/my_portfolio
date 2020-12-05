const PortfolioItem = ({ img_src, alt, title, desc, techStack }) => (
  <div className="box">
    <div className="columns">
      <div className="column">
        <figure className="image project-img-container">
          <img src={img_src} alt={alt} />
        </figure>
      </div>
      <div className="column">
        <div className="content has-text-left">
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>Technology stack used to build this app:</p>
          <ul>
            {techStack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
