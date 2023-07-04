const react = require("react");
const ReactDOM = require("react-dom");

function Localities() {
  return (
    <section class="localities">
      <div class="locality__container">
        <h1>
          Popular localities in and around <b>Colombo</b>
        </h1>
        <div class="localities_card">
          <div class="panel1">
            <div class="cards">
              <div class="cards_content">
                <h4>Kolpity</h4>
                <p>496 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel2">
            <div class="cards">
              <div class="cards_content">
                <h4>Bambalapity</h4>
                <p>462 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel3">
            <div class="cards">
              <div class="cards_content">
                <h4>Dehiwala</h4>
                <p>325 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel1">
            <div class="cards">
              <div class="cards_content">
                <h4>Borella</h4>
                <p>631 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel2">
            <div class="cards">
              <div class="cards_content">
                <h4>Wellawatta</h4>
                <p>386 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel3">
            <div class="cards">
              <div class="cards_content">
                <h4>Torrington</h4>
                <p>133 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel1">
            <div class="cards">
              <div class="cards_content">
                <h4>Galle Face</h4>
                <p>140 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel2">
            <div class="cards">
              <div class="cards_content">
                <h4>Marine Drive</h4>
                <p>318 places</p>
              </div>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="panel3">
            <div class="cards last_panel">
              <h4>
                see more <i class="fa-solid fa-angle-down"></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Localities;
