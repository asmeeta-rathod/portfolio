import React from "react";

const Certifications = () => {
  const certs = [
    {
      title: "Fastlane for React Native: Deploy your app autonomously!",
      issuer: "Udemy",
      year: "2026",
      link: "https://www.udemy.com/certificate/UC-088b6344-8bd0-4172-a80e-7eae3291ece6/",
    },
    {
      title: "Introduction to Mobile Development",
      issuer: "Meta",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/PZHJ25I9LR4K",
    },
    {
      title: "Full-Stack Mobile App with React Native, Redux, Django & AWS",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-8bb22bb2-6284-4a47-84f2-32a23fa8ddd0/",
    },
    {
      title: "React Native with TypeScript – The Practical Guide",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-046f12c1-1cbf-4b49-9509-f32fba8d9940/",
    },
    {
      title: "React Native: Build Native Mobile Applications",
      issuer: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-440e8f15-e136-488c-9bde-ea8bd23852d2/",
    },
  ];

  return (
    <section id="certifications">
      <h2 className="title">Certifications</h2>

      <div className="cert-grid">
        {certs.map((cert, i) => (
          <div key={i} className="cert-card">
            <div className="cert-top">
              <span className="cert-icon">🎓</span>
              <span className="cert-year">{cert.year}</span>
            </div>

            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>

            <a href={cert.link} target="_blank" className="cert-btn">
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
