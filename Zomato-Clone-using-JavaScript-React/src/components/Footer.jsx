const react = require("react");
const ReactDOM = require("react-dom");

function Footer() {
  return (
    <footer class="container footer">
      <div class="footer_section1">
        <img src="images/logo.png" alt="zomato" />
        <div class="section1__buttonContainer">
          <button>
            <img
              src="https://flagcdn.com/w40/lk.png"
              alt="Sri Lankan Flag"
              className="flag"
            />
            Sri Lanka
          </button>
          <button>
            <i class="fa fa-globe"></i>English
          </button>
        </div>
      </div>
      <div class="navigation_container">
        <div class="link__container">
          <h5>ABOUT ZOMATO</h5>
          <a href="#" class="footer__link">
            Who We Are
          </a>
          <a href="#" class="footer__link">
            Blog
          </a>
          <a href="#" class="footer__link">
            Work With Us
          </a>
          <a href="#" class="footer__link">
            Investor Relations
          </a>
          <a href="#" class="footer__link">
            Report Fraud
          </a>
          <a href="#" class="footer__link">
            Contact Us
          </a>
        </div>

        <div class="link__container">
          <h5>ZOMAVERSE</h5>
          <a href="#" class="footer__link">
            Zomato
          </a>
          <a href="#" class="footer__link">
            Feeding Sri Lanka
          </a>
          <a href="#" class="footer__link">
            Colombo
          </a>
          <a href="#" class="footer__link">
            Zomaland
          </a>
        </div>

        <div class="link__container">
          <h5>FOR RESTAURANTS</h5>
          <a href="#" class="footer__link">
            Partner With Us
          </a>
          <a href="#" class="footer__link">
            Apps For You
          </a>
          <br />
          <h5>FOR ENTERPRISES</h5>
          <a href="#" class="footer__link">
            Zomato For Work
          </a>
        </div>

        <div class="link__container">
          <h5>LEARN MORE</h5>
          <a href="#" class="footer__link">
            Privacy
          </a>
          <a href="#" class="footer__link">
            Security
          </a>
          <a href="#" class="footer__link">
            Terms
          </a>
          <a href="#" class="footer__link">
            Sitemap
          </a>
        </div>

        <div class="link__container">
          <h5>SOCIAL LINKS</h5>
          <div class="social__links_container">
            <button>
              <i class="fa-brands fa-linkedin-in"></i>
            </button>
            <button>
              <i class="fa-brands fa-instagram"></i>
            </button>
            <button>
              <i class="fa-brands fa-twitter"></i>
            </button>
            <button>
              <i class="fa-brands fa-youtube"></i>
            </button>
            <button>
              <i class="fa-brands fa-facebook"></i>
            </button>
          </div>
          <br />
          <img
            src="images/appleStore.png"
            alt="appleStore"
            class="footer__section_logos"
          />
          <img
            src="images/playStore.png"
            alt="playStore"
            class="footer__section_logos"
          />
        </div>
      </div>
      <div class="disclaimer">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2008-2022 © Zomato™ Ltd. All
        rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
