// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       name: 'Trip Planner App',
//       desc: 'React Native + Firebase app for travel itineraries',
//     },
//     {
//       name: 'Photographer Booking App',
//       desc: 'Booking platform for photographers',
//     },
//     {
//       name: 'Non-profit Rewards App',
//       desc: 'App for rewarding volunteers in non-profits',
//     }
//   ];

//   return (
//     <section id="projects">
//       <h2 className="title">Projects</h2>
//       <div className="projects">
//         {projects.map((p, i) => (
//           <div key={i} className="project-card">
//             <h3>{p.name}</h3>
//             <p>{p.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";

const Projects = () => {
  //   const projects = [
  //     {
  //       name: "Trip Planner App",
  //       description:
  //         "A mobile application designed to help users create, organise, and manage travel itineraries with real-time updates and location-based features.",
  //       points: [
  //         "Built itinerary management features allowing users to add, edit, and organise trip activities",
  //         "Integrated Maps API for location-based planning and navigation support",
  //         "Implemented Firebase for real-time data synchronisation across user sessions",
  //         "Designed modular and reusable UI components for scalable development",
  //         "Ensured smooth performance and responsive UI across Android and iOS devices",
  //       ],
  //       tech: "React Native, Firebase, Redux , REST APIs, Map Integration",
  //       link: "https://webmobtech.com/casestudy/trip-planner-app/",
  //     },
  //     {
  //       name: "Photographer Booking App",
  //       description:
  //         "A mobile platform connecting users with photographers through seamless booking, scheduling, and payment workflows.",
  //       points: [
  //         "Developed booking and scheduling system for photographer availability management",
  //         "Integrated secure authentication and user account management",
  //         "Implemented payment workflows for service booking (Stripe integration)",
  //         "Built responsive and user-friendly UI for both customers and service providers",
  //         "Managed real-time booking updates and notifications using Firebase",
  //       ],
  //       tech: "React Native, Firebase, Redux, GraphQL, Stripe API",
  //       link: "https://webmobtech.com/casestudy/photography-scheduling-app-development/",
  //     },
  //     {
  //       name: "ElectroMart - E-commerce Mobile App",
  //       description:
  //         "A full-featured mobile application for browsing and purchasing electronic products, designed with a focus on scalability, performance, and clean architecture.",
  //       points: [
  //         "Implemented product listing, cart, and checkout workflows",
  //         "Built scalable state management using Redux Toolkit",
  //         "Integrated REST APIs for authentication and product data",
  //         "Developed reusable UI components for consistent user experience",
  //         "Optimised performance for smooth navigation and responsiveness",
  //       ],
  //       tech: "React Native, TypeScript, Redux Toolkit, REST APIs",
  //       link: "https://gitlab.com/asmeetarathod/e-mart",
  //     },
  //     {
  //       name: "SplitSmart - Expense Management App",
  //       description:
  //         "A mobile application designed to simplify expense tracking and bill splitting between users with real-time updates and intuitive UI.",
  //       points: [
  //         "Designed expense tracking and group bill splitting functionality",
  //         "Implemented state management for handling dynamic data updates",
  //         "Built clean and user-friendly UI for seamless user interaction",
  //         "Handled edge cases for accurate expense calculations",
  //       ],
  //       tech: "React Native, TypeScript, State Management",
  //       link: "https://gitlab.com/asmeetarathod/splitsmart",
  //     },
  //     // {
  //     //   name: "TaskMate - Task Management App",
  //     //   description:
  //     //     "A productivity-focused mobile app for managing daily tasks with efficient state handling and responsive design.",
  //     //   points: [
  //     //     "Implemented CRUD operations for task management",
  //     //     "Designed modular and reusable UI components",
  //     //     "Ensured responsive design across multiple screen sizes",
  //     //     "Optimised performance for smooth user experience",
  //     //   ],
  //     //   tech: "React Native, TypeScript",
  //     //   link: "https://gitlab.com/asmeetarathod/taskmate",
  //     // },
  //   ];

  const projects = [
    {
      name: "SQL Business Analysis – Sales & Customer Performance",
      tags: "SQL | PostgreSQL | Data Analysis",
      description:
        "A SQL portfolio project analyzing customer, order, product and category data to answer business questions and identify sales patterns.",
      points: [
        "Analyzed customer distribution and order activity.",

        "Evaluated product quantities and category-level sales.",

        "Identified high-value orders and customer sales performance.",

        "Used CASE statements to classify products by price.",

        "Calculated sales metrics using SQL aggregations.",

        "Checked data quality by identifying customers without associated orders.",
      ],
      projectType: "Personal portfolio project",
      tech: "SQL, Joins, Aggregations, GROUP BY, HAVING, CASE Statements, Data Quality Checks",
      link: "https://lnkd.in/p/gGf5ECGP",
      viewText: "View SQL Project →",
    },
    {
      name: "Power BI Sales Analysis Dashboard",
      tags: "Microsoft Power BI | Data Visualization | KPI Reporting",
      description:
        "An interactive Power BI dashboard designed to monitor sales performance, explore trends and present key business metrics to support data-driven decisions.",
      points: [
        "Created KPI visuals for sales, profit, quantity and discounts.",

        "Analyzed sales trends and performance over time.",

        "Compared product and category performance.",

        "Explored geographic sales patterns.",

        "Used interactive filters to support deeper analysis.",
      ],
      projectType: "Personal portfolio project",
      tech: "Power BI, Data Visualization, KPI Reporting, Dashboard Development, Business Intelligence",
      link: "https://lnkd.in/p/gFh3_V7R",
      viewText: "View Dashboard →",
    },
    {
      name: "Power BI Air Quality Analysis Dashboard",
      tags: "Microsoft Power BI | Environmental Data | Data Visualization",
      description:
        "A data visualization project exploring air-quality indicators across cities to compare pollution levels and identify trends through interactive reporting.",
      points: [
        "Analyzed average CO, NO, SO₂ and PM2.5 measurements.",

        "Explored air-quality trends and differences across locations.",

        "Compared indicators using charts and visual summaries.",

        "Used geographic visuals to explore location-based patterns.",

        "Added city filters for interactive analysis.",
      ],
      projectType: "Personal portfolio project",
      tech: "Power BI, Data Visualization, Trend Analysis, Geographic Analysis, Interactive Dashboards",
      link: "https://lnkd.in/p/gG9MGha7",
      viewText: "View Dashboard →",
    },
    {
      name: "Excel Operational Reporting - Builders Academy Australia",
      tags: "Microsoft Excel | Pivot Tables | Operational Reporting",
      description:
        "A practical reporting example based on my Junior Business & Data Analyst internship at Builders Academy Australia, involving recurring operational reports used to monitor registrations, enrollments and other business activities.",
      points: [
        "Prepared daily occurrence and orientation reports.",

        "Supported daily enrolment and registration reporting.",

        "Maintained active transfer reports.",

        "Prepared weekly conversion and registration reports.",

        "Supported monthly registration and re-engagement reporting.",

        "Applied data validation and quality checks to improve reporting accuracy.",
      ],
      projectType: "Work experience evidence",
      tech: "Advanced Excel, Pivot Tables, Operational Reporting, Data Validation, Data Quality Checks, VETtrak, VETEnrol",
      note: "This project is based on internship experience.",
      link: "https://lnkd.in/p/g36ftpJy",
      viewText: "View Reporting →",
    },
  ];

  return (
    <section id="projects">
      <h2 className="title">Projects</h2>

      <div className="projects">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.tags}</p>
            <p>{project.description}</p>

            <ul>
              {project.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>

            <p>
              <strong>Tech:</strong> {project.tech}
            </p>
            
            {project.note && (
              <p>
                <strong>Note:</strong> {project.note}
              </p>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {/* View Project → */}
              {project.viewText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
