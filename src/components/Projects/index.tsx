import { Doi } from "../icons/Doi";
import { GitHub } from "../icons/GitHub";
import { LinkedIn } from "../icons/LinkedInIcon";
import { Youtube } from "../icons/YouTube";
import Reveal from "../utils/Reveal";

const projectData = [
  {
    title: "SR Simulator",
    links: [
      {
        svg: <LinkedIn className="w-5 h-5 md:w-7 md:h-7 text-gray-950" />,
        href: "https://www.linkedin.com/posts/seoul-robotics_lidar-engineering-siteplanning-activity-7272434095668768768-_U28?utm_source=share&utm_medium=member_desktop",
      },
    ],
    skills: [
      "TypeScript",
      "React",
      "Golang",
      "Python",
      "Babylon.js",
      "PostgreSQL",
      "Docker",
      "Git",
      "AWS",
      "Linux",
    ],
    description:
      "A cloud hosted LiDAR simulator built using TypeScript-React on the frontend and Go on the backend, connected via a REST API,\
        and with a PostgreSQL database. I fully manage the design, development and deployment of new features across the full stack of\
        this project. In doing so, I transformed this internal tool into a customer-facing solution with multiple features not found in\
        competing software.",
  },
  {
    title: "Portfolio Page (this webpage)",
    links: [
      {
        svg: <GitHub className="w-5 h-5 md:w-7 md:h-7 text-gray-950" />,
        href: "https://github.com/LucaTaglialatela/LucaTaglialatela.github.io",
      },
    ],
    skills: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "Motion Framer",
      "Git",
      "GitHub Actions",
    ],
    description:
      "A portfolio website built from scratch using TypeScript-React, Vite, TailwindCSS, and animations powered by Framer Motion.\
      This project is hosted, and automatically deployed using GitHub Actions, on GitHub Pages.",
  },
  {
    title: "Alice in Gravityland",
    links: [
      {
        svg: <GitHub className="w-5 h-5 md:w-7 md:h-7 text-gray-950" />,
        href: "https://github.com/bwyanyuuu/AliceInGravityland",
      },
      {
        svg: <Youtube className="w-5 h-5 md:w-7 md:h-7 text-gray-950" />,
        href: "https://www.youtube.com/watch?v=U06KPKcVk9s",
      },
      {
        svg: <Doi className="w-5 h-5 md:w-7 md:h-7 text-gray-950" />,
        href: "https://dl.acm.org/doi/10.1145/3588027.3595591",
      },
    ],
    skills: ["Unity", "C#", "Arduino", "C++", "Git"],
    description:
      "Featured at SIGGRAPH '23 and first place award winner at the Vision Go Wild 2023 awards, Alice in Gravityland is a VR adventure\
      exploring three gravity experiences with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic\
      feedback enhances players' sense of directionality to improve their immersion. Inspired by Lewis Carroll's Alice's Adventures in\
      Wonderland (1865), the game invites players to alter gravity to solve puzzles and experience gravity in a unique way through this\
      multi-sensory VR adventure.",
  },
];

export const Projects = () => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center overflow-hidden px-4 py-24 bg-gray-200 text-gray-950">
      <Reveal width={"100%"}>
        <>
          {projectData.map((project, index) => (
            <div key={index} className="my-6">
              <div className="w-full max-w-5xl flex justify-between items-center mx-auto">
                <p className="text-left text-sm leading-loose tracking-wide font-bold md:text-xl md:leading-loose">
                  {project.title}
                </p>
                <div className="flex-1 h-[1px] mx-8 bg-gray-950/30" />
                <div className="flex flex-row gap-2">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.href}>
                      {link.svg}
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full max-w-5xl flex flex-col justify-between mx-auto">
                <p className="max-w-5xl text-left text-xs leading-loose tracking-wide md:text-lg md:leading-loose">
                  {project.skills.join(" • ")}
                </p>
                <p className="my-3 max-w-5xl text-left text-xs leading-loose tracking-wide md:text-lg md:leading-loose">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </>
      </Reveal>
    </div>
  );
};
export default Projects;
