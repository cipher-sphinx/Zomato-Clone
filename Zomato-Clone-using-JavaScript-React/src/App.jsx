import Collection from "./components/Collection";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GetApp from "./components/GetApp";
import Hero from "./components/Hero";
import Localities from "./components/Localities";
import Offer from "./components/Offer";

const react = require("react");
const ReactDOM = require("react-dom");

function App() {
  return (
    <div>
      <Hero />
      <Offer />
      <Collection />
      <Localities />
      <GetApp />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
