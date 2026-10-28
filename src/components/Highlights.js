import React from "react";

const Highlights = () => {
  //   const items = [
  //     "3+ years React Native experience",
  //     "4+ production mobile apps delivered",
  //     "25–40% performance improvements",
  //     "95%+ crash-free app stability",
  //     "App Store & Play Store releases",
  //   ];

  const items = [
    "Hands-on experience in operational data analysis and reporting",
    "SQL, Power BI and Advanced Excel",
    "Daily, weekly and monthly reporting experience",
    "Data validation, reconciliation and quality checks",
    "Master of Information Systems graduate",
  ];

  return (
    <section id="highlights" className="highlights">
      {items.map((item, i) => (
        <div key={i} className="highlight-card">
          ✔ {item}
        </div>
      ))}
    </section>
  );
};

export default Highlights;
