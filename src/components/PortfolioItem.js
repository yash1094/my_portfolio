const PortfolioItem = ({
  img_src,
  alt,
  title,
  desc,
  techStack,
  github,
  demo = null,
}) => (
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
            {techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <div className="btn-row">
            <a
              href={github}
              alt="github link to project site"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i> Github
            </a>
            <a
              href={demo}
              alt="link to project site"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-laptop" aria-hidden="true"></i> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PortfolioItem;
