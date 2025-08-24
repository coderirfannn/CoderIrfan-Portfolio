import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profileLogo.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          
          {/* Name with Gradient */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x">
            Coder Irfan
          </h2>
          
          {/* Skills with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Web Developer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-purple-500">{cursor}</span>
              )}
              displayTextRenderer={(text, i) => (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 font-semibold">
                  {text}
                </span>
              )}
            />
          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            Hi, I’m <span className="font-semibold text-white">Mohd Irfan</span> — a
            <span className="font-semibold text-white"> Full Stack Web Developer (MERN)</span>
            and <span className="font-semibold text-white">CSE student at Lovely Professional University</span>.
            I build <span className="font-semibold text-white">dynamic, user-friendly, and scalable web applications</span>,
            with experience in <span className="font-semibold text-white">React.js, Node.js, MongoDB, and RESTful APIs</span>.
            I enjoy turning <span className="italic text-white">ideas into impactful digital solutions</span>.
          </p>

          {/* Resume Button */}
          <a
            href="https://docs.google.com/document/d/1RVkGj3YiMo3VYgC6yh7WMRBP4xuKaB3l1kvHQOeeEXo/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 10px #8245ec, 0 0 40px #a855f7',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full transition-transform duration-500 hover:scale-105"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Coder Irfan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_15px_25px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
