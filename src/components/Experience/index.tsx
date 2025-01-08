import Reveal from "../utils/Reveal";

const experienceData = [
  {
    company: "Seoul Robotics",
    role: "Software Engineer",
    location: "Seoul, South Korea",
    date: "11/2023 — Present",
    descriptions: [
      <>
        Achieved a +10x performance boost, for 3D LiDAR simulation software,
        significantly lowering loading times and expanding the product’s
        usability to a wider range of devices, particularly improving
        accessibility for lower-end hardware.
      </>,
      <>
        Led the transformation of an internal tool to customer facing solution,
        under minimal supervision, by managing the design, development and
        integration of core features across the full stack and cloud deployment.
      </>,
      <>
        Reduced time to market from 6 months to a month, by developing custom
        backend scripts to turn product generic data into actionable insights
        and events specific to clients’ use cases.
      </>,
    ],
  },
  {
    company: "National Taiwan University",
    role: "Research Assistant",
    location: "Taipei, Taiwan",
    date: "02/2022 — 08/2023",
    descriptions: [
      <>
        Led multiple research projects, resulting in award-winning publications
        in top tier conferences and journals.
      </>,
    ],
  },
  {
    company: "MetHer",
    role: "Full-Stack Engineering Intern",
    location: "Taipei, Taiwan",
    date: "06/2022 — 08/2022",
    descriptions: [
      <>
        Developed React components to automate data flows and improve the
        company website's membership system. Collaborated closely with front-
        and backend teams.
      </>,
    ],
  },
  {
    company: "Vrije Universiteit Amsterdam",
    role: "Teaching Assistant",
    location: "Amsterdam, The Netherlands",
    date: "09/2019 — 06/2021",
    descriptions: [
      <>
        Taught seminar-style classes and assisted students during practical
        sessions.
      </>,
    ],
  },
];

export const Experience = () => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center overflow-hidden px-4 py-24 bg-gray-950 text-gray-200">
      <Reveal width={"100%"}>
        <>
          <div className="w-full max-w-5xl flex justify-between mx-auto">
            <p className="text-left text-2xl leading-loose tracking-wide md:text-3xl md:leading-loose">
              Experience
            </p>
          </div>
          {experienceData.map((exp, index) => (
            <div key={index} className="my-6">
              <div className="w-full max-w-5xl flex justify-between mx-auto">
                <p className="text-left text-sm leading-loose tracking-wide font-bold md:text-xl md:leading-loose">
                  {exp.company}
                </p>
                <p className="text-right text-sm leading-loose tracking-wide font-bold md:text-xl md:leading-loose">
                  {exp.date}
                </p>
              </div>
              <div className="w-full max-w-5xl flex justify-between mx-auto">
                <p className="text-left text-sm leading-loose tracking-wide md:text-xl md:leading-loose">
                  {exp.role}
                </p>
                <p className="text-right text-sm leading-loose tracking-wide md:text-xl md:leading-loose">
                  {exp.location}
                </p>
              </div>
              <div className="w-full max-w-5xl mx-auto mt-2">
                {exp.descriptions.map((description, i) => (
                  <p
                    key={i}
                    className="text-left text-xs leading-loose tracking-wide md:text-lg md:leading-loose"
                  >
                    {">_ "}
                    {description}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </>
      </Reveal>
    </div>
  );
};

export default Experience;
