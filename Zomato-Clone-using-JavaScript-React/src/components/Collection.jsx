const react = require("react");
const ReactDOM = require("react-dom");

function Collection() {
  return (
    <section class="container collections">
      <div class="large_container">
        <h1>Collections</h1>
        <div class="sub__heading_container">
          <span>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Colombo, based on trends
          </span>
          <span>
            All collections in Colombo <i class="fa-solid fa-caret-right"></i>
          </span>
        </div>
      </div>

      <div class="collections_card_container">
        <div class="card card1">
          <div class="overlay"></div>
          <div class="content">
            <h4>Newly Opened</h4>
            <span>
              8 places <i class="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>

        <div class="card card2">
          <div class="overlay"></div>
          <div class="content">
            <h4>Best of Colombo</h4>
            <span>
              42 places <i class="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>

        <div class="card card3">
          <div class="overlay"></div>
          <div class="content">
            <h4>Trending This Weak</h4>
            <span>
              30 places <i class="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>

        <div class="card card4">
          <div class="overlay"></div>
          <div class="content">
            <h4>Most Romantic Restaurants</h4>
            <span>
              14 places <i class="fa-solid fa-caret-right"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
