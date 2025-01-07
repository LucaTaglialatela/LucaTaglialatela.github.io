import Reveal from "../utils/Reveal";

export const Contact = () => {
  return (
    <div className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 bg-gray-950 text-gray-200">
      <Reveal>
        <p className="my-6 max-w-6xl text-left text-xl leading-loose tracking-wide md:text-2xl md:leading-loose">
          In order to reach out, please send an email to{" "}
          <span className="text-decoration-line: underline">
            <a href={"mailto:luca.taglialatela@gmail.com"}>
              luca.taglialatela@gmail.com
            </a>
          </span>{" "}
          or find me on{" "}
          <span className="text-decoration-line: underline">
            <a href={"https://www.linkedin.com/in/lucataglialatela/"}>
              LinkedIn
            </a>
          </span>
          !
        </p>
      </Reveal>
    </div>
  );
};

export default Contact;
