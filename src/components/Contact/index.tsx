import Reveal from "../utils/Reveal";

export const Contact = () => {
  const footer = (
    <div className="relative flex items-center justify-center min-h-fit bg-gray-950 text-gray-200">
      <p className="max-w-5xl text-center text-sm leading-loose tracking-wide md:text-sm md:leading-loose">
        Made with ❤️
        <br />
        &copy; 2025 Luca Taglialatela
      </p>
    </div>
  );

  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden px-4 py-24 bg-gray-950 text-gray-200">
      <div className="flex-1 flex items-center justify-center">
        <Reveal>
          <p className="my-6 max-w-6xl text-center text-xl leading-loose tracking-wide md:text-2xl md:leading-loose">
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
      {footer}
    </div>
  );
};

export default Contact;
