import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <h1 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        AM
      </h1>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#hero" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#highlights" onClick={() => setIsOpen(false)}>
            Highlights
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
        </li>
        <li>
          <a href="#certifications" onClick={() => setIsOpen(false)}>
            Certifications
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => setIsOpen(false)}>
            Education
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
