import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          PROJECTS
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
          A showcase of my projects, highlighting skills and experience across
          various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-700 bg-gray-900 backdrop-blur-md shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 sm:h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative animate-fadeIn">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500 transition"
            >
              &times;
            </button>
            <div className="flex flex-col lg:flex-row">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full lg:w-1/2 h-auto object-contain rounded-xl p-4"
              />
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 hover:bg-purple-800 text-gray-400 py-2 rounded-xl font-semibold transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 text-white py-2 rounded-xl font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
