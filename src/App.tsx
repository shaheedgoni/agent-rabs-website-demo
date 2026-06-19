import Header from "./components/header";
import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import WhyUs from "./sections/whyUs";
import Testmonials from "./sections/testimonials";
import Contact from "./sections/contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testmonials />
      <Contact />
    </>
  );
}

export default App;
