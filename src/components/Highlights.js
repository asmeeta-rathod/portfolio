import React from "react";

const Highlights = () => {
  const items = [
    "3+ years React Native experience",
    "4+ production mobile apps delivered",
    "25–40% performance improvements",
    "95%+ crash-free app stability",
    "App Store & Play Store releases",
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
