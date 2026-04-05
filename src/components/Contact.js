import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGitlab,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="title">Contact Me</h2>

      <div className="contact-items">
        <p>
          <FaEnvelope />
          <a href="mailto:asmeetarathod@gmail.com">asmeetarathod@gmail.com</a>
        </p>

        <p>
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/asmeeta-mistri"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <p>
          <FaGitlab />
          <a
            href="https://gitlab.com/asmeetarathod"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitLab Profile
          </a>
        </p>

        <p>
          <FaMapMarkerAlt /> Melbourne, VIC, Australia
        </p>
      </div>
    </section>
  );
};

export default Contact;
