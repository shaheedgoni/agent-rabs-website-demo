import { useState, useEffect } from "react";
import OrangeButton from "./OrangeButton";
import logo from "../assets/logo.png";
import "./header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={scrolled ? "header scrolled" : "header"}>
      <img src={logo} className="logo" />

      <div className="header-right">
        <div>About</div>
        <div>Services</div>
        <div>Why Us</div>
        <div>Testimonials</div>
        <div>Contact</div>

        <OrangeButton name="WhatsApp Us" />

        <img
          src="https://api.iconify.design/material-symbols:menu.svg?color=%23D9A165"
          alt="Menu"
          width="35"
          height="35"
          className="hb-menu"
        />
      </div>
    </div>
  );
}

export default Header;
