import React from "react";

const Skills = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "Node.js",
    "React Native",
    "Expo",
    "Redux",
    "Redux Toolkit",
    "React Hooks",
    "REST APIs",
    "GraphQL",
    "Firebase",
    "Push Notifications",
    "Real-time Chat",
    "API Integration",
    "Git | GitHub | GitLab",
    "CI/CD",
    "iOS and Android App Deployment",
    "Linux",
  ];

  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
