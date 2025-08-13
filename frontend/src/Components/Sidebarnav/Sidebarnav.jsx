import { useRef, useState, useEffect } from "react";
import "./Sidebarnav.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Sidebarnav = () => {
  const [active, setActive] = useState("About");

  const navItems = ["About", "Experience", "Projects", "Contact"];
  const refs = {
    About: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  const handleClick = (item) => {
    refs[item]?.current?.scrollIntoView({ behavior: "smooth" });
    setActive(item);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-section"));
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(refs).forEach((ref) => {
      if (ref?.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="layout-container">
      <div className="sidebar">
        {navItems.map((item) => (
          <div
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            <span className="nav-line"></span>
            <span className="nav-label">{item}</span>
          </div>
        ))}
      </div>
      <nav className="mobile-nav">
        {navItems.map((item) => (
          <div
            key={item}
            className={`mobile-nav-item ${active === item ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      <div className="content-panel">
        <section
          ref={refs.About}
          data-section="About"
          className="content-text"
        >
          I’m a Full-Stack Web Developer and Machine Learning Integrator dedicated to building powerful, intelligent, and secure digital solutions. With expertise across the entire development stack, I create responsive and scalable web applications while integrating machine learning models to bring smart, data-driven features to life. Security is a top priority in every project I undertake—from secure authentication flows to protecting data integrity and implementing best practices against vulnerabilities.
        </section>

        <section
          ref={refs.Experience}
          data-section="Experience"
          className="content-text"
        >
          💼 I’ve worked on a diverse range of full-stack projects that showcase both my frontend finesse and backend expertise. One of my early projects was a travel agency platform built with React, where I focused on crafting a clean and responsive user interface that delivered a smooth booking experience.

          📖 I also developed a storytelling platform using Django, React, and PostgreSQL — a full-stack solution that allowed users to create, manage, and share stories in a structured and scalable environment. This project helped me master the synergy between backend APIs and modern frontend frameworks.

          🧠 One of my most exciting achievements was building an Enigma Generator — a creative platform powered by a machine learning model trained to generate unique riddles. I integrated this model seamlessly into a React and Django stack, blending AI with interactive web design to deliver a playful and intelligent experience.

          📜 On top of that, I’m proud to be Meta certified as a Front-End Developer, a recognition of my proficiency in modern UI/UX practices, responsive design, and advanced React development.
        </section>

        <section
          ref={refs.Projects}
          data-section="Projects"
          className="projects"
        >
          <div>
            <strong className="myproj">My projects🦑</strong>
            <div className="project1">
              <img className="proj1-img" src="./images/Screenshot 2025-07-25 155141.png" alt="Travel Agency Website" />
              <p className="description1">
                <strong>travel agency website</strong> <br />
                🌍 I built a responsive travel agency platform using React, focusing on clean UI and smooth user interactions.
                📅 Users can browse destinations, view packages, and book trips through an intuitive interface.
                ⚙️ The frontend ensures seamless navigation and dynamic rendering of travel data.
                ✨ This project highlights my frontend skills in creating accessible, visually appealing web experiences.
              </p>
            </div>
            <div className="project2">
              <img className="proj2-img" src="./images/Screenshot 2025-07-26 024926.png" alt="Storytelling Web App" />
              <p className="description2">
                <strong>storytelling responsive web app</strong> <br />
                🧱 Awall is a storytelling platform built with Django, React, and PostgreSQL, designed to let users share and explore personal stories.
                👨‍💻 I led full-stack development, handling everything from database design to frontend implementation.
                🧑‍🤝‍🧑 The platform supports user registration, story posting, and interactive browsing experiences.
                🔐 Focused on clean UI, smooth UX, and secure content handling for an engaging digital space.
              </p>
            </div>
            <div className="project2">
              <img className="proj2-img" src="./images/Screenshot 2025-07-26 040707.png" alt="SkillRate Web App" />
              <p className="description2">
                <strong>skillrate responsive web app</strong> <br />
                Skill Rate is a web platform that allows users to rate shared content like videos using an interactive emoji-based slider.
                ⚙️ Built with React on the frontend and Django for the backend, it ensures a smooth user experience and reliable data handling.
                📊 Ratings are averaged and displayed publicly, while users are restricted from rating the same content multiple times.
                🎯 The goal is to gamify user feedback and promote engaging, community-driven content evaluation.
              </p>
            </div>
            <div className="project2">
              <img className="proj2-img" src="./images/Screenshot 2025-08-07 085534.png" alt="Enigma Generator" />
              <p className="description2">
                <strong>Enigma Generator</strong> <br />
                Role🎯: Fullstack Developer & ML Engineer
                Tech🛠️: React · Django · PyTorch · Transfer Learning · PostgreSQL <br />
                AI-powered web app that generates original riddles using a fine-tuned NLP model. Built a REST API to serve the model and a responsive React frontend for real-time enigma generation. Features include riddle creation, and interactive user interface.
              </p>
            </div>
          </div>
        </section>

        <section
          ref={refs.Contact}
          data-section="Contact"
          className="contact"
        >
          <div>
            <div className="github">
              <motion.div
                className="git-icon"
                style={{ display: "inline-block" }}
                animate={{
                  y: [0, -50, 0, -30, 0, -10, 0],
                  scaleY: [1, 0.8, 1, 0.9, 1, 0.95, 1],
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <FaGithub size={40} />
              </motion.div>
              <p><a href="https://github.com/thepythonistm">see our code space👉 github.com</a></p>
            </div>
            <div className="linkedin">
              <motion.div
                className="linkedin-icon"
                style={{ display: "inline-block" }}
                animate={{
                  y: [0, -50, 0, -30, 0, -10, 0],
                  scaleY: [1, 0.8, 1, 0.9, 1, 0.95, 1],
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <FaLinkedin size={40} />
              </motion.div>
              <p><a href="https://linkedin.com/in/yourprofile">Check out my LinkedIn profile</a></p>
            </div>
            <div className="email">
              <motion.div
                className="email-icon"
                style={{ display: "inline-block" }}
                animate={{
                  y: [0, -50, 0, -30, 0, -10, 0],
                  scaleY: [1, 0.8, 1, 0.9, 1, 0.95, 1],
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <MdMarkEmailRead size={40} />
              </motion.div>
              <p><a href="mailto:your.email@example.com">Get in touch via email</a></p>
            </div>
            <div className="watsap">
              <motion.div
                className="watsap-icon"
                style={{ display: "inline-block" }}
                animate={{
                  y: [0, -50, 0, -30, 0, -10, 0],
                  scaleY: [1, 0.8, 1, 0.9, 1, 0.95, 1],
                  x: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <FaSquareWhatsapp size={40} />
              </motion.div>
              <p><a href="https://wa.me/yourphonenumber">Reach me on WhatsApp</a></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebarnav;