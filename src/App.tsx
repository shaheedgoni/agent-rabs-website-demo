import Header from "./components/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import WhyUs from "./sections/whyUs";
import Testmonials from "./sections/testimonials";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 500, once: false });
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
