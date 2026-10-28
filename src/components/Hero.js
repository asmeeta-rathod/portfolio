import React from "react";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src={profile} alt="Asmeeta" className="hero-img" />
      <h1>Asmeeta Mistri</h1>
      {/* <h2>Mobile Application Developer | 3+ Years Experience</h2>
      <p>Melbourne, Australia</p>
      <p>
        Building scalable iOS & Android apps with focus on performance,
        reliability, and clean architecture.
      </p> */}
      <h2>Business & Data Analyst</h2>
      <p>Based in Melbourne, Australia</p>
      <br></br>
      <p>
        I’m a Master of Information Systems graduate with a passion for working with data and solving business problems. I enjoy using SQL, Power BI and Excel to analyze information, create meaningful reports and help businesses make better decisions and improve their processes.
      </p>
    </section>
  );
};

export default Hero;
