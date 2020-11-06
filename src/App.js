import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Porfolio";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Body />
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{" "}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
