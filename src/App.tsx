import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
// import ScrollLine from "./components/utils/ProgressBar";
import NavigationDots from "./components/utils/NavigationDots";
import { LinkedIn } from "./components/icons/LinkedInIcon";
import { GitHub } from "./components/icons/GitHub";
import { Orcid } from "./components/icons/Orcid";

function App() {
  const header = (
    <div
      className="px-8 fixed w-full flex items-center justify-end top-0 z-50 text-base font-bold gap-3 mix-blend-difference md:px-14"
      style={{
        height: `clamp(45px, 8vh, calc(45px + 3.6rem))`,
        background: "rgba(0, 0, 0, 0)",
        backdropFilter: "blur(12px)",
      }}
    >
      <a href={"https://www.linkedin.com/in/lucataglialatela/"}>
        <LinkedIn className="w-5 h-5 md:w-7 md:h-7 text-gray-200" />
      </a>
      <a href={"https://github.com/LucaTaglialatela/"}>
        <GitHub className="w-5 h-5 md:w-7 md:h-7 text-gray-200" />
      </a>
      <a href={"https://orcid.org/0009-0000-2048-6691/"}>
        <Orcid className="w-5 h-5 md:w-7 md:h-7 text-gray-200" />
      </a>
    </div>
  );

  return (
    <div>
      {header}
      {/* <ScrollLine /> */}
      <NavigationDots />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
