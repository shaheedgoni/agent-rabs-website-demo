import logo from "../assets/logo.png";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" />

      <div className="header-right">
        <div>About</div>
        <div>Services</div>
        <div>Featured listings</div>
        <div>Why choose us</div>
        <div>Testimonials</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Header;
