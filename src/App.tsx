import Header from "./components/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import WhyUs from "./sections/whyUs";
import Testmonials from "./sections/testimonials";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("set");
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const pageElements = document.querySelectorAll<HTMLElement>(".page");
    pageElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testmonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
