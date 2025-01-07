import Reveal from "../utils/Reveal";

export const About = () => {
  return (
    <div className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 bg-gray-950 text-gray-200">
      <Reveal>
        <p className="my-6 max-w-5xl text-left text-base leading-loose tracking-wide md:text-lg md:leading-loose">
          Dear reader,
          <br />
          <br />
          My name is Luca. I am a Dutch national, currently living in Seoul,
          South-Korea, where I work as a Software Engineer at Seoul Robotics in
          the R&D division. My responsibilities cover the full stack of our
          software, from front- to backend. Because our team is on the smaller
          side, I am enjoying the perks and cons of minimal supervision.
          Although having to figure out most things on your own can be difficult
          and requires a lot of resilience, there are many opportunities to
          learn and grow as an engineer.
          <br />
          <br />
          In August 2023, I graduated from National Taiwan University with a
          Master's degree in Computer Science and Information Engineering. Prior
          to this I obtained my Bachelor's degree, with the distinction cum
          laude, in Computer Science from the Vrije Universiteit in Amsterdam.
          My academic work has won awards and has been featured at premier
          conferences and in journals.
          <br />
          <br />
          During my time off, I enjoy working out and playing League of Legends
          or venturing through the city and visiting cat 😼 cafes. I also love
          riding my bike and good walks along the riverside or through parks. I
          am fluent in Dutch and English, and trying to pick up a third
          language.
        </p>
      </Reveal>
    </div>
  );
};
export default About;
