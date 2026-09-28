import './App.css';
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PremiumCursor from "./components/PremiumCursor";

function App() {
  return (
    <>
      <PremiumCursor />
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
