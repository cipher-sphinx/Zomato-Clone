const react = require("react");
const ReactDOM = require("react-dom");

function HeroMain() {
  return (
    <div class="hero__section_container">
      <img
        src="images/heroSectionLogo.png"
        class="hero__section_logo"
        alt="Zomato logo"
      />
      <h1 class="hero__section_title">
        Discover the best food & drinks in Colombo
      </h1>
      <div class="hero__section_input_container">
        <div class="hero__section_location_icon">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <input
          type="text"
          class="input_container_location"
          placeholder="Colombo"
        />

        <div class="hero__section_search_icon">
          <i class="fas fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          class="input_container_search"
          placeholder="Search for a restaurant, cusine or a dish"
        />
      </div>
    </div>
  );
}

export default HeroMain;
