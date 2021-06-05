import Navbar from "./navbar/Navbar";

import HeroBanner from "./HeroBanner";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Services from "../services/Services";
import About from "../about/About";
import Contact from "../contact/Contact";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Projects />
      <Skills />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
