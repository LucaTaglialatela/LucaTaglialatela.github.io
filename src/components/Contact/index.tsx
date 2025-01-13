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
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-4"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
            {status && <p className="text-center mt-4">{status}</p>}
          </form>
        </Reveal>
      </div>
      {footer}
    </div>
  );
};

export default Contact;
