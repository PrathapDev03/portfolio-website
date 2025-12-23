import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./section/Home.jsx";
import About from "./section/About.jsx";
import Skills from "./section/Skills.jsx";
import Projects from "./section/Projects.jsx";
import Experience from "./section/Experience.jsx";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
// import ParticlesBackground from './components/ParticlesBackground.jsx';
import OverlayMenu from "./components/OverlayMenu.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";

export default function App() {
  const [introDone, setIntrDone] = React.useState(false);

  return (
    <>
      {!introDone && (
        <IntroAnimation onFinish={() => setIntrDone(true)} />
      )}

      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          {/* <ParticlesBackground /> */}
          <OverlayMenu />

          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
