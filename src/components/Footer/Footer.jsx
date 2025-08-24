import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050414] border-t border-gray-700">
      <div className="container mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x">
          Coder Irfan
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 mt-6">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-300 hover:text-purple-500 transition-all duration-300 font-medium text-sm sm:text-base my-1 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all group-hover:w-full rounded"></span>
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-6 mt-8">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohd-irfan-78544b280" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/code_with_irfan01" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@CoderIrfan" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-300 hover:text-purple-500 transition-transform transform hover:scale-125"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-8">
          © 2025 Coder Irfan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
