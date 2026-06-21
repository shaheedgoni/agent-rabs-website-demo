import { useState, useEffect } from "react";
import OrangeButton from "./OrangeButton";
import logo from "../assets/logo.png";
import "./header.css";
import "../App.css";

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
      <a href="#hero">
        <img src={logo} className="logo" />
      </a>

      <div className="header-right">
        <nav className="links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#whyus">Why Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <OrangeButton name="WhatsApp Us" className="whatsapp-us" />

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
