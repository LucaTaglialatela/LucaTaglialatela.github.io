// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // const [count, setCount] = useState(0)

  const header = (
    <div
      className="px-14 flex items-center justify-between sticky top-0 z-20 text-base font-bold"
      style={{
        height: `calc(45px + 3.6rem)`,
        background: "var(--bg-opaque)",
        backdropFilter: "blur(12px)",
      }}
    >
      asdasdasd
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
