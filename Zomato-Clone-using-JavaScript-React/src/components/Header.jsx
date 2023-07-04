const react = require("react");
const ReactDOM = require("react-dom");

function Header() {
  return (
    <header>
      <nav class="navbar">
        <a href="#">
          <i class="fa-solid fa-mobile-screen"></i> Get the App
        </a>
        <div class="navbar__menu_container">
          <a href="#" class="link">
            Investor Relations
          </a>
          <a href="#" class="link">
            Add Restaurant
          </a>
          <a href="#" class="link">
            Login
          </a>
          <a href="#" class="link">
            Sign up
          </a>
          <a href="#" class="user__icon">
            <i class="fa-solid fa-user"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
