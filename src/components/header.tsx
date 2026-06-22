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

  const [hbMenu, setHbMenu] = useState(false);

  function openHbMenu() {
    if (hbMenu) {
      setHbMenu(false);
    } else {
      setHbMenu(true);
    }
  }

  return (
    <>
      <div className="is-fixed">
        <div className={scrolled || hbMenu ? "header scrolled" : "header"}>
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

            <a href="#contact">
              <OrangeButton name="WhatsApp Us" className="whatsapp-us" />
            </a>

            <img
              src="https://api.iconify.design/material-symbols:menu.svg?color=%23D9A165"
              alt="Menu"
              width="35"
              height="35"
              className="hb-menu"
              onClick={openHbMenu}
            />
          </div>
        </div>

        <div className={`hb-closed ${hbMenu ? "hb-open" : ""}`}>
          <a onClick={openHbMenu} href="#about">
            About
          </a>
          <a onClick={openHbMenu} href="#services">
            Services
          </a>
          <a onClick={openHbMenu} href="#whyus">
            Why Us
          </a>
          <a onClick={openHbMenu} href="#testimonials">
            Testimonials
          </a>
          <a onClick={openHbMenu} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
