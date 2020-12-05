import "./App.scss";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
