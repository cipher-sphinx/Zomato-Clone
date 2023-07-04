const react = require("react");
const ReactDOM = require("react-dom");

function Explore() {
  return (
    <section class="explore">
      <div class="explore__option">
        <h1 class="explore__option_title">Explore options near me</h1>
        <div class="explore__option_points ">
          <div class="Explore__option_card">
            <div class="explore__option_panel">
              <div class="secret">
                <h5>Popular cuisines near me</h5>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div class="Explore__option_card">
            <div class="explore__option_panel">
              <div class="secret">
                <h5>Popular restaurant types near me</h5>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div class="Explore__option_card">
            <div class="explore__option_panel secert">
              <div class="secret">
                <h5>Top Restaurant Chains</h5>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div class="Explore__option_card">
            <div class="explore__option_panel ">
              <div class="secret">
                <h5>Cities We Deliver To</h5>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
