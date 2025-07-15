import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Calendar,
} from "lucide-react";
import "./App.css";
import "./index.css";
import resume from "./assets/Ganesh_Sasidhar_Resume.pdf";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    "Programming Languages": [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
    ],
    "Frontend Tools": [
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TailwindCSS",
        icon: "https://img.icons8.com/ios/50/000000/code.png",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
    "Backend Tools": [
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "REST APIs",
        icon: "https://img.icons8.com/ios/50/000000/code.png",
      },
    ],
    Databases: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
    "Developer Tools": [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
    "CS Core Subjects": [
      {
        name: "Operating Systems",
        icon: "https://img.icons8.com/ios/50/000000/code.png", // Custom icon
      },
      {
        name: "Computer Networks",
        icon: "https://img.icons8.com/ios/50/000000/code.png", // Custom icon
      },
      {
        name: "Object Oriented Programming",
        icon: "https://img.icons8.com/ios/50/000000/code.png", // Custom icon
      },
    ],
  };

  const projects = [
    {
      title: "B2B Transaction Manager",
      description:
        "Built a full-stack B2B transaction platform enabling store owners to initiate, monitor, and manage transactions efficiently.",
      technologies: [
        "React",
        "Express.JS",
        "MongoDB",
        "Node.JS",
        "TailwindCSS",
      ],
      features: [
        "Designed modules for handling over 100+ supplier and customer records",
        "Managing inventory, storing 500+ customer orders",
        "Integrated JWT-based login and protected 100% of backend routes",
        "Improved frontend performance by ~25% using React optimization",
      ],
      demoLink: "https://b2b-transaction-manager.netlify.app/",
      githubLink:
        "https://github.com/SasidharKanigolla/B2B_Transaction_Manager",
    },
    {
      title: "Food Ordering App",
      description:
        "Built a responsive single-page food ordering app simulating a modern food delivery platform with over 50+ restaurants and 200+ menu items.",
      technologies: ["React", "JavaScript", "HTML", "TailwindCSS", "APIs"],
      features: [
        "Integrated third-party APIs using reusable React components",
        "Dynamic restaurant data, menus, and images fetching",
        "Used React hooks for UI state management",
        "Cart updates, menu filtering, and smooth user experience",
      ],
      demoLink: null,
      githubLink: "https://github.com/SasidharKanigolla/food_ordering_app_",
    },
    {
      title: "Accommodation Booking Platform",
      description:
        "Built a full-stack platform enabling users to book accommodations and hosts to manage listings, supporting over 100+ property entries.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "MongoDB",
        "Express.JS",
        "Node.JS",
      ],
      features: [
        "Implemented secure login, user registration, and profile customization",
        "Developed CRUD features for hosts to manage listings",
        "6+ key fields: pricing, availability, images, description, location",
        "Star-based reviews and written feedback system",
      ],
      demoLink: "https://backend-project-z1ih.onrender.com/listings/",
      githubLink: "https://github.com/SasidharKanigolla/backend_proj",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ganesh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-400 ${
                    activeSection === item ? "text-blue-400" : "text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {[
                "home",
                "about",
                "skills",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen  flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute  inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative z-10 text-center px-4 overflow-visible">
          <div className="mb-8 mt-20">
            {/* <div className="w-32  h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-4xl font-bold">
              GS
            </div> */}
            {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
              <img
                src="https://drive.usercontent.google.com/download?id=1UK1sn-CbajUXHaRwtgIPm2b3_NGHr4FS&export=view&authuser=0" // put your image path here
                alt="Ganesh Sasidhar"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.3] pb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Kanigolla Ganesh Sasidhar
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-3xl mx-auto">
            Passionate Information Technology student with a strong foundation
            in Data Structures & Algorithms and full-stack development. Skilled
            in building scalable, high-performance web applications using modern
            technologies such as React.js, Node.js, and Express.js. Known for
            strong problem-solving abilities and a focus on clean, maintainable
            code.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2 rounded-md text-sm sm:text-base"
            >
              View My Work
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-2 rounded-md text-sm sm:text-base"
            >
              Get In Touch
            </Button>

            <a
              href={resume}
              download
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-md text-sm sm:text-base transition-all"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I'm a passionate Information Technology student at Aditya
                Engineering College, maintaining a CGPA of 9.03/10.0 and a
                strong commitment to both academic and practical excellence.
                With a solid foundation in Data Structures & Algorithms and
                hands-on experience in full-stack web development, I focus on
                building efficient, modern applications that solve real-world
                problems.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My core strengths include problem-solving, system design, and
                full-stack development. On the frontend, I specialize in
                React.js, JavaScript, and modern CSS frameworks. On the backend,
                I work extensively with Node.js and Express.js, and manage
                databases using MongoDB and MySQL.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md hover:shadow-blue-500/40 transition-shadow cursor-default">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-blue-400">
                      <GraduationCap size={24} />
                    </span>
                    <div className="text-2xl font-bold">9.03</div>
                  </div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>

                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm shadow-md hover:shadow-indigo-500/40 transition-shadow cursor-default">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-indigo-400">
                      <Code size={24} />
                    </span>
                    <div className="text-2xl font-bold">3+</div>
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-6xl font-bold text-white">
                GS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-md hover:shadow-blue-400/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Code size={24} className="text-blue-400" />
                  <h3 className="text-lg font-semibold text-blue-300">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillList.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-blue-500/20 transition-all duration-200"
                    >
                      {/* <span className="text-lg">{skill.icon}</span> */}
                      <span className="text-sm font-medium">{skill.name}</span>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-white">
                      Bachelor of Technology - Information Technology
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Aditya Engineering College
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>2022 - Present</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">9.03</div>
                    <div className="text-sm text-gray-400">CGPA / 10.0</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <GraduationCap className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-white">
                      Intermediate - M.P.C
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Sri Chaitanya Junior College
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>2020 - 2022</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-400">
                      95.2%
                    </div>
                    <div className="text-sm text-gray-400">Percentage</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/10 text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-black hover:bg-white/10"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/10 text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    ) : (
                      <button
                        disabled
                        className="opacity-50 cursor-not-allowed px-3 py-1.5 text-sm rounded inline-flex items-center"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </button>
                    )}

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-black bg-white/90 rounded border border-white/20 hover:bg-white/70 transition"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:sasidharkanigolla44@gmail.com"
              className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={24} className="text-blue-400" />
              <span>sasidharkanigolla44@gmail.com</span>
            </a>
            <a
              href="tel:+917396622885"
              className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-green-400 text-xl">📞</span>
              <span>+91 7396622885</span>
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/ganesh-sasidhar-kanigolla/"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/SasidharKanigolla"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Kanigolla Ganesh Sasidhar</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
