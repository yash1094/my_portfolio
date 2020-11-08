import "./Navbar.Component.scss";

const Navbar = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <button
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="true"
        data-target="navbarBasicExample"
        onClick={() => {
          console.log("hello");
        }}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item"></div>
        <a className="navbar-item" href="#home">
          Home
        </a>
        <a className="navbar-item" href="#about">
          About
        </a>
        <a className="navbar-item" href="#education">
          Education
        </a>
        <a className="navbar-item" href="#portfolio">
          Portfolio
        </a>
        <a className="navbar-item" href="#contact">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
