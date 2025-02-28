import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaReact,
  FaNode,
  FaAws,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiFigma,
  SiJavascript,
  SiPython,
  SiExpress,
} from "react-icons/si";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark bg-slate-900"
          : "bg-gradient-to-br from-green-50 to-green-100"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full backdrop-blur-lg z-50 ${
          darkMode ? "bg-slate-800/70" : "bg-white/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1
              className={`text-2xl font-bold ${
                darkMode
                  ? "text-green-400"
                  : "bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
              }`}
            >
              SHRISTI
            </h1>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "text-green-400 hover:bg-slate-700"
                    : "text-green-600 hover:bg-green-100"
                }`}
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <div className="hidden md:flex space-x-8">
                <a
                  href="#skills"
                  className={`${
                    darkMode
                      ? "text-green-400 hover:text-green-300"
                      : "text-green-600 hover:text-green-800"
                  } transition-colors`}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className={`${
                    darkMode
                      ? "text-green-400 hover:text-green-300"
                      : "text-green-600 hover:text-green-800"
                  } transition-colors`}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={`${
                    darkMode
                      ? "text-green-400 hover:text-green-300"
                      : "text-green-600 hover:text-green-800"
                  } transition-colors`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`backdrop-blur-lg p-8 rounded-3xl shadow-lg inline-block ${
              darkMode ? "bg-slate-800/30" : "bg-white/30"
            }`}
          >
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
                darkMode ? "text-green-400" : "text-green-800"
              }`}
            >
              Hi, I'm Shristi Dhakal
            </h1>
            <p
              className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${
                darkMode ? "text-green-200" : "text-green-600"
              }`}
            >
              Creative Developer specializing in modern web experiences
            </p>
            <button
              className={`${
                darkMode
                  ? "bg-green-600/90 hover:bg-green-700"
                  : "bg-green-600/90 hover:bg-green-700"
              } text-white px-8 py-3 rounded-xl transition-all flex items-center mx-auto gap-2 shadow-lg hover:shadow-green-200`}
            >
              <FaFileDownload />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`backdrop-blur-lg p-8 rounded-3xl shadow-lg ${
              darkMode ? "bg-slate-800/30" : "bg-white/30"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-8 text-center ${
                darkMode ? "text-green-400" : "text-green-800"
              }`}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-transform hover:scale-105 ${
                    darkMode ? "bg-slate-700/30" : "bg-white/70"
                  }`}
                >
                  <div
                    className={`mb-2 flex justify-center text-4xl ${
                      darkMode ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {React.cloneElement(skill.icon, {
                      className: `${
                        skill.name === "TypeScript"
                          ? "text-[#3178C6]"
                          : skill.name === "MongoDB"
                          ? "text-[#47A248]"
                          : skill.name === "React"
                          ? "text-[#61DAFB]"
                          : skill.name === "Node.js"
                          ? "text-[#339933]"
                          : skill.name === "AWS"
                          ? "text-[#FF9900]"
                          : darkMode
                          ? "text-green-400"
                          : "text-green-600"
                      }`,
                    })}
                  </div>
                  <span
                    className={`font-medium ${
                      darkMode ? "text-green-300" : "text-green-800"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              darkMode ? "text-green-400" : "text-green-800"
            }`}
          >
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div
                key={project}
                className={`group p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                  darkMode
                    ? "bg-slate-800/30 hover:bg-slate-700/50"
                    : "bg-white/70 hover:bg-white/90"
                }`}
              >
                <div
                  className={`h-48 rounded-xl mb-4 transition-transform group-hover:scale-95 ${
                    darkMode ? "bg-slate-700/50" : "bg-green-100/50"
                  }`}
                ></div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-green-400" : "text-green-800"
                  }`}
                >
                  Project {project}
                </h3>
                <p
                  className={`${
                    darkMode ? "text-green-300" : "text-green-600"
                  }`}
                >
                  Innovative solution combining modern tech stack with
                  user-centric design
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`backdrop-blur-lg p-8 rounded-3xl shadow-lg ${
              darkMode ? "bg-slate-800/30" : "bg-white/30"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-8 text-center ${
                darkMode ? "text-green-400" : "text-green-800"
              }`}
            >
              Let's Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-colors ${
                      darkMode
                        ? "bg-slate-700/30 border-slate-600 focus:ring-green-400 text-green-100"
                        : "bg-white/70 border-green-100 focus:ring-green-500 text-green-800"
                    }`}
                  />
                </div>
                {/* Add similar styling for other form elements */}
              </form>
              <div className="space-y-8">
                <div
                  className={`p-6 rounded-xl shadow-md ${
                    darkMode ? "bg-slate-700/30" : "bg-white/70"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-4 ${
                      darkMode ? "text-green-400" : "text-green-800"
                    }`}
                  >
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div
                      className={`flex items-center gap-3 ${
                        darkMode ? "text-green-300" : "text-green-700"
                      }`}
                    >
                      <FaEnvelope />
                      <span>shristidhakal43@gmail.com</span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className={`p-2 rounded-lg transition-colors ${
                          darkMode
                            ? "bg-slate-600/30 hover:bg-slate-500/50"
                            : "bg-green-600/10 hover:bg-green-600/20"
                        }`}
                      >
                        <FaGithub
                          className={
                            darkMode ? "text-green-400" : "text-green-700"
                          }
                          size={20}
                        />
                      </a>
                      {/* Add other social links */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 mt-16 backdrop-blur-lg ${
          darkMode
            ? "bg-slate-800/90 text-green-400"
            : "bg-green-800/90 text-green-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Shristi Dhakal. Crafted with ♥ and green tea</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
