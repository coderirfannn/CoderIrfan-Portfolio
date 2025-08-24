import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7i5bsf7",
        "template_fbwo2zn",
        form.current,
        "hufuf_CTV0bPCuRSv"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">CONTACT</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          I’d love to hear from you — reach out for opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-8 rounded-xl shadow-2xl border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          {/* Email */}
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />

          {/* Name */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 hover:scale-105 transform transition-all shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
