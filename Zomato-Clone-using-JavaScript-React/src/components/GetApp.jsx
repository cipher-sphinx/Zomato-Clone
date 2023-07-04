const react = require("react");
const ReactDOM = require("react-dom");

function GetApp() {
  return (
    <section class="container get__the_app">
      <div class="semiContainer">
        <div class="left">
          <img src="images/mobileBanner.png" alt="mobileBanner" />
        </div>
        <div class="right">
          <h1>Get the Zomato App</h1>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
          <div class="radio__buttons_container">
            <div>
              <input type="radio" id="email" name="download_app" />
              <label for="email" className="get_app_label">
                Email
              </label>
            </div>
            <div>
              <input type="radio" id="phone" name="download_app" />
              <label for="email" className="get_app_label">
                Phone
              </label>
            </div>
          </div>
          <div class="input_container">
            <input type="email" placeholder="Email" />
            <button>Share App link</button>
          </div>
          <div class="download__app_container">
            <h5>Download app from</h5>
            <div>
              <img src="images/appleStore.png" alt="appleStore" />
              <img src="images/playStore.png" alt="playStore" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApp;
