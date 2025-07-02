import { useEffect, useRef, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const [activeSection, setActiveSection] = useState("home");
  const [isHome, setHome] = useState(true);

  const sections = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sections).forEach(([key, ref]) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (ref != homeRef) {
              setHome(false);
            } else {
              setHome(true);
            }
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="App">
      <nav className={`navbar ${isHome ? "home" : "scrolled"}`}>
        <div className="nav-container">
          <h1 className="nav-logo">James Campbell</h1>
          <ul className="nav-menu">
            {Object.entries(sections).map(([key, ref]) => (
              <li
                key={key}
                className={activeSection === key ? "active" : ""}
                onClick={() => scrollToSection(ref)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section ref={homeRef} className="hero-mockup">
        <Home></Home>
      </section>
      <section ref={aboutRef} className="about-section">
        <About></About>
      </section>
      <section ref={skillsRef} className="skills-section">
        <Skills></Skills>
      </section>
      <section ref={projectsRef} className="projects-section">
        <Projects></Projects>
      </section>
      <footer className="footer-mockup">
        <p>© 2025 James Campbell</p>
      </footer>
    </div>
  );
}

export default App;
