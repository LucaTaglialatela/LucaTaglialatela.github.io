import Reveal from "../utils/Reveal";

const educationData = [
  {
    school: "National Taiwan University",
    degree: "MSc Computer Science and Information Engineering (GPA: 4.1/4.3)",
    location: "Taipei, Taiwan",
    date: "09/2021 — 08/2023",
    descriptions: [
      <>
        Attended{" "}
        <span className="text-decoration-line: underline">
          <a href="https://s2023.siggraph.org">SIGGRAPH 2023</a>
        </span>{" "}
        from August 6-11 in Los Angeles, USA to present our award winning
        project{" "}
        <span style={{ fontStyle: "italic" }}>Alice in Gravityland</span> at the
        Experience Hall's Immersive Pavilion.
      </>,
      <>
        Awarded first place in the Cross-Domain Category at the 2023 Vision Get
        Wild competition.
      </>,
      <>
        Awarded the{" "}
        <span style={{ fontStyle: "italic" }}>
          Outstanding International Graduate Student Scholarship
        </span>{" "}
        by the College of Electrical Engineering and Computer Science.
      </>,
      <>
        Conducted research in the{" "}
        <span className="text-decoration-line: underline">
          <a href="https://mikechen.com">
            Human-Computer Interaction laboratory
          </a>
        </span>
        , under advisorship of Mike Y. Chen, resulting in multiple publications
        at top tier conferences.
      </>,
    ],
  },
  {
    school: "Vrije Universiteit Amsterdam",
    degree: "BSc Computer Science (GPA: 9.1/10.0, Rank: 3/180)",
    location: "Amsterdam, The Netherlands",
    date: "09/2018 — 07/2021",
    descriptions: [
      <>
        Participated in and helped organize the{" "}
        <span className="text-decoration-line: underline"></span>
        <a href="https://nxpcup.nxp.com">EMEA NXP Cup</a> (2020 and 2021) at the
        Vrije Universiteit.
      </>,
      <>
        Placed first in the 2019 Amsterdam Algorithm Programming Junior Event.
      </>,
    ],
  },
];

export const Education = () => {
  return (
    <div className="relative flex flex-col min-h-screen justify-center overflow-hidden px-4 py-24 bg-gray-200 text-gray-950">
      <Reveal width={"100%"}>
        <>
          <div className="w-full max-w-5xl flex justify-between mx-auto">
            <p className="text-left text-2xl leading-loose tracking-wide md:text-3xl md:leading-loose">
              Education
            </p>
          </div>
          {educationData.map((edu, index) => (
            <div key={index} className="my-6">
              <div className="w-full max-w-5xl flex justify-between mx-auto">
                <p className="text-left text-sm leading-loose tracking-wide font-bold md:text-xl md:leading-loose">
                  {edu.school}
                </p>
                <p className="text-right text-sm leading-loose tracking-wide font-bold md:text-xl md:leading-loose">
                  {edu.date}
                </p>
              </div>
              <div className="w-full max-w-5xl flex justify-between mx-auto">
                <p className="text-left text-sm leading-loose tracking-wide md:text-xl md:leading-loose">
                  {edu.degree}
                </p>
                <p className="text-right text-sm leading-loose tracking-wide md:text-xl md:leading-loose">
                  {edu.location}
                </p>
              </div>
              <div className="w-full max-w-5xl mx-auto mt-2">
                {edu.descriptions.map((description, i) => (
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

export default Education;
