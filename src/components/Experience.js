import React from "react";

const Experience = () => {
  //   const data = [
  //     {
  //       role: "Independent Mobile Developer (React Native)",
  //       company: "Self-employed",
  //       location: "Melbourne, VIC",
  //       duration: "Nov 2025 – Present",
  //       details: [
  //         "Building and maintaining React Native applications using TypeScript and Expo",
  //         "Implemented authentication flows and REST API integrations",
  //         "Developed reusable UI components for scalable architecture",
  //         "Optimised app performance improving load time and responsiveness",
  //         "Followed Git workflows, code reviews, and release best practices",
  //       ],
  //     },
  //     {
  //       role: "Console Operator (Part Time)",
  //       company: "BP",
  //       location: "Truganina, VIC",
  //       duration: "Feb 2024 – Feb 2026",
  //       details: [
  //         "Provided customer service in a high-volume retail environment",
  //         "Handled POS transactions and maintained cash accuracy",
  //         "Ensured safety procedures and monitored site operations",
  //         "Balanced work with postgraduate studies and career development",
  //       ],
  //     },
  //     {
  //       role: "Mobile Application Developer",
  //       company: "Builders Academy Australia",
  //       location: "Melbourne, VIC",
  //       duration: "Mar 2025 – Nov 2025",
  //       details: [
  //         "Delivered production React Native features across iOS & Android platforms",
  //         "Improved app stability achieving ~95%+ crash-free sessions",
  //         "Managed TestFlight and Google Play Store release cycles",
  //         "Integrated REST APIs and Firebase for real-time functionality",
  //         "Collaborated with backend, design, and product teams",
  //         "Optimised performance through component refactoring and testing improvements",
  //       ],
  //     },
  //     {
  //       role: "React Native Developer",
  //       company: "WebMob Technologies",
  //       location: "Gujarat, India",
  //       duration: "Jul 2021 – Sep 2023",
  //       details: [
  //         "Built and deployed 2+ production mobile applications",
  //         "Improved performance by 25–40% through optimisation techniques",
  //         "Implemented Redux for scalable state management",
  //         "Integrated Firebase services including Auth, and notifications",
  //         "Worked closely with backend and design teams for feature delivery",
  //         "Delivered responsive UI using reusable components and layouts",
  //       ],
  //     },
  //     {
  //       role: "Software Developer Intern",
  //       company: "WebMob Technologies",
  //       location: "Gujarat, India",
  //       duration: "Jan 2021 – Jun 2021",
  //       details: [
  //         "Supported development team in building and testing mobile applications using React Native",
  //         "Learned modern mobile development workflows including Git version control and collaborative development",
  //         "Assisted with API integration and data flow management within mobile applications",
  //         "Participated in internal code reviews and development discussions",
  //         "Gained practical experience working in a professional Agile development environment",
  //       ],
  //     },
  //   ];

  const data = [
    {
      role: "Warehouse Operations Associate",
      company: "DHL Supply Chain",
      location: "Melbourne, VIC",
      duration: "Apr 2026 – Present",
      details: [
        "Perform inbound and outbound warehouse activities, including receiving, put-away, picking, packing and order checking.",
        "Process customer returns and support accurate inventory updates and stock movements within warehouse systems.",
        "Handle consignment processing and related warehouse transactions, ensuring accurate system records and operational documentation.",
        "Conduct stocktakes, cycle counts and inventory checks to reconcile physical stock against WMS records.",
        "Identify stock discrepancies and inventory exceptions, supporting accurate inventory data and efficient warehouse operations.",
        "Collaborate with warehouse teams to maintain order accuracy, inventory integrity and operational productivity.",
      ],
    },
    {
      role: "Junior Business and Data Analyst",
      company: "Builders Academy Australia",
      location: "Melbourne, VIC",
      duration: "Mar 2025 – May 2025",
      details: [
        "Extracted, cleaned and analyzed business data using SQL, Advanced Excel and Pivot Tables to support operational reporting.",
        "Prepared daily, weekly and monthly reports covering registrations, enrollments, orientations, transfers and re-engagement activity.",
        "Performed data validation, cleansing and quality checks to improve data accuracy and reporting integrity.",
        "Analyzed business datasets to identify trends, inconsistencies and operational insights.",
        "Worked with stakeholders to understand reporting requirements and deliver relevant information.",
        "Documented reporting processes and contributed to more consistent reporting workflows.",
      ],
    },
    {
      role: "Console Operator (Part Time)",
      company: "BP",
      location: "Truganina, VIC",
      duration: "Feb 2024 – Feb 2026",
      details: [
        "Supported daily operations in a high-volume customer service environment.",
        "Processed transactions accurately using point-of-sale systems while following operational procedures.",
        "Managed cash handling, shift-based responsibilities and operational reporting requirements.",
        "Maintained attention to detail and service quality while balancing work with postgraduate studies.",
      ],
    },
    {
      role: "React Native Developer",
      company: "WebMob Technologies",
      location: "Gujarat, India",
      duration: "Jul 2021 – Sep 2023",
      details: [
        "Analyzed business requirements and translated them into technical solutions for mobile applications.",
        "Developed and maintained cross-platform applications using React Native for iOS and Android.",
        "Integrated REST APIs and backend systems to support application workflows and data exchange.",
        "Performed application testing, debugging, defect resolution and production support.",
        "Collaborated with designers, developers and stakeholders using Agile delivery practices.",
        "Improved application performance through optimization and continuous improvement activities.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "WebMob Technologies",
      location: "Gujarat, India",
      duration: "Jan 2021 – Jun 2021",
      details: [
        "Assisted with application development, testing, debugging and API integration.",
        "Supported Agile development processes, technical documentation and team collaboration.",
        "Used Git version control and contributed to software improvement activities.",
      ],
    },
  ];

  return (
    <section id="experience">
      <h2 className="title">Experience</h2>

      {data.map((exp, i) => (
        <div key={i} className="exp-card">
          <h3>{exp.role}</h3>
          <p>
            <strong>{exp.company}</strong> | {exp.location}
          </p>
          <span>{exp.duration}</span>

          <div className="exp-points">
            {exp.details.map((d, j) => (
              <div key={j} className="exp-point">
                {d}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
