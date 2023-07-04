import Header from "./Header";
import HeroMain from "./HeroMain";

const react = require("react");
const ReactDOM = require("react-dom");

function Hero() {
  return (
    <section class="hero__section">
      <Header />
      <HeroMain />
    </section>
  );
}

export default Hero;
