import Reveal from "../utils/Reveal";

export const Contact = () => {
  return (
    <div className="relative grid min-h-fit place-content-center overflow-hidden px-4 py-24 text-gray-200">
      <Reveal>
        <p className="my-6 max-w-5xl text-left text-base leading-loose tracking-wide md:text-lg md:leading-loose">
          In order to reach out, please send an email to <a href={"mailto:luca.taglialatela@gmail.com"}>luca.taglialatela@gmail.com</a> or find me on <a href={"https://www.linkedin.com/in/lucataglialatela/"}>LinkedIn</a>!
        </p>
      </Reveal>
    </div>
  );
};

export default Contact;
