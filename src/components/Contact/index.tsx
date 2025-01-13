import { useRef, useState } from "react";
import Reveal from "../utils/Reveal";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        if (form.current) form.current.reset();
      })
      .catch((error) => {
        setStatus("Failed to send message. Please try again.");
        console.error(error);
      });
  };

  const footer = (
    <div className="relative flex items-center justify-center min-h-fit bg-gray-950 text-gray-200">
      <p className="max-w-5xl text-center text-xs leading-loose tracking-wide md:text-sm md:leading-loose">
        Made with ❤️
        <br />
        &copy; 2025 Luca Taglialatela
      </p>
    </div>
  );

  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden px-4 py-24 bg-gray-950 text-gray-200">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Reveal>
          <div className="w-full max-w-4xl space-y-8">
            <p className="text-center text-base leading-loose tracking-wide md:text-2xl md:leading-loose">
              In order to reach out, please send an email to{" "}
              <span className="text-decoration-line: underline">
                <a href={"mailto:luca.taglialatela@gmail.com"}>
                  luca.taglialatela@gmail.com
                </a>
              </span>{" "}
              , find me on{" "}
              <span className="text-decoration-line: underline">
                <a href={"https://www.linkedin.com/in/lucataglialatela/"}>
                  LinkedIn
                </a>
              </span>
              {", "}
              or use the form below!
            </p>
            <div className="flex justify-center w-full">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="w-full max-w-xl space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-200 text-gray-950 font-bold py-2 px-4 rounded 
             transition-all duration-300 ease-in-out
             hover:shadow-[0_0_20px_rgba(229,231,235,0.8)]"
                >
                  Send Message
                </button>
                {status && <p className="text-center mt-4">{status}</p>}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
      {footer}
    </div>
  );
};

export default Contact;
