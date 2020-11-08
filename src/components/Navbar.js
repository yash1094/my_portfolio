const NavBar = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
          alt="bulma"
        />
      </a>
      {/* <a
        role="button"
        class="navbar-burger burger is-active"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        // eslint-disable-next-line
        href="/"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a> */}
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item"></div>
        <a class="navbar-item" href="#home">
          Home
        </a>
        <a class="navbar-item" href="#about">
          About
        </a>
        <a class="navbar-item" href="#education">
          Education
        </a>
        <a class="navbar-item" href="#portfolio">
          Portfolio
        </a>
        <a class="navbar-item" href="#contact">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default NavBar;
