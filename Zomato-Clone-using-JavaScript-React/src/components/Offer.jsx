const react = require("react");
const ReactDOM = require("react-dom");

function Offer() {
  return (
    <section class="container we__offer">
      <div class="we__offer_card">
        <img src="images/item1.png" alt="dilevery" />
        <div class="we__offer_content">
          <h2>Order Online</h2>
          <p>Stay home and order to your doorstep</p>
        </div>
      </div>
      <div class="we__offer_card">
        <img src="images/item2.png" alt="dining" />
        <div class="we__offer_content">
          <h2>Dining</h2>
          <p>View the city's favourit dining venue.</p>
        </div>
      </div>
      <div class="we__offer_card">
        <img src="images/item3.png" alt="Night-life" />
        <div class="we__offer_content">
          <h2>Nightlife and Clubs</h2>
          <p>Explore the city's top Nightlife outlets</p>
        </div>
      </div>
    </section>
  );
}

export default Offer;
