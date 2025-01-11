import { useState, useEffect } from "react";

const sections = [
  "home",
  "about",
  "projects",
  "experience",
  "education",
  "contact",
];

export const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.round(currentPosition / windowHeight);
      setActiveSection(sections[sectionIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:block fixed left-5 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section} className="group relative flex items-center">
            <button
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
            <span className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-sm capitalize">
              {section}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;
