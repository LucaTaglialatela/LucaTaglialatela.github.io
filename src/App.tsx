import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import { LinkedIn } from "./components/icons/LinkedInIcon";
import { GitHub } from "./components/icons/GitHub";
import { Orcid } from "./components/icons/Orcid";

function App() {
  const header = (
    <div
      className="px-14 flex items-center justify-end sticky top-0 z-20 text-base font-bold gap-3"
      style={{
        height: `calc(45px + 3.6rem)`,
        background: "var(--bg-opaque)",
        backdropFilter: "blur(12px)",
      }}
    >
      <a href={"https://www.linkedin.com/in/lucataglialatela/"}>
        <LinkedIn className="w-8 h-8 text-gray-200" />
      </a>
      <a href={"https://github.com/LucaTaglialatela/"}>
        <GitHub className="w-8 h-8 text-gray-200" />
      </a>
      <a href={"https://orcid.org/0009-0000-2048-6691/"}>
        <Orcid className="w-8 h-8 text-gray-200" />
      </a>
    </div>
  );

  const footer = (
    <div className="relative grid min-h-fit place-content-center overflow-hidden px-4 py-24 text-gray-200">
      <p className="max-w-5xl text-center text-sm leading-loose tracking-wide md:text-sm md:leading-loose">
        Made by me with ❤️
        <br />
        &copy; 2025 Luca Taglialatela
      </p>
    </div>
  );

  return (
    <div className="bg-gray-950">
      {header}
      <Hero />
      <About />
      <Contact />
      {footer}
    </div>
  );
}

export default App;
