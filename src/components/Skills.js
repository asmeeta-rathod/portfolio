import React from "react";

const Skills = () => {
  const skills = [
    "SQL",
    "Power BI",
    "Advanced Excel",
    "Dashboard Development",
    "KPI Reporting",
    "Data Visualization",
    "Data Cleaning",
    "Data Validation",
    "Data Quality",
    "Data Reconciliation",
    "Trend Analysis",
    "Exception Analysis",
    "Business Intelligence",
    "Operational Reporting",
    "Business Insights",
    "Business Requirements",
    "Process Improvement",
    "Manhattan WMS",
    "SQL Databases",
    "REST APIs",
    "Data Integration",
    "Stakeholder Collaboration",

    // "Expo",
    // "Redux",
    // "Redux Toolkit",
    // "React Hooks",
    // "REST APIs",
    // "GraphQL",
    // "Firebase",
    // "Push Notifications",
    // "Real-time Chat",
    // "API Integration",
    // "Git | GitHub | GitLab",
    // "CI/CD",
    // "iOS and Android App Deployment",
    // "Linux",
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
