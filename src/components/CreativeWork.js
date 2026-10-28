import React from "react";

const creativeCategories = [
  {
    icon: "✿",
    title: "Mandala Art",
    description:
      "Detailed patterns created with patience, balance and attention to detail.",
  },
  {
    icon: "♧",
    title: "Bottle Art",
    description:
      "Decorative artwork that transforms everyday objects into something unique.",
  },
  {
    icon: "🎨",
    title: "Paintings & Drawings",
    description:
      "Personal artwork exploring colours, subjects and different visual styles.",
  },
  {
    icon: "✂",
    title: "DIY Projects",
    description:
      "Hands-on creative experiments combining ideas, materials and design.",
  },
];

function CreativeWork() {
  return (
    <section id="creative-work" className="creative-section">
      <h2 className="title">Creative Work</h2>

      <p className="creative-intro">
        Beyond data and technology, creativity is another way I explore ideas
        and express myself. I enjoy making art, experimenting with designs and
        creating things by hand. These projects reflect my curiosity, patience
        and attention to detail.
      </p>

      <div className="creative-grid">
        {creativeCategories.map((item) => (
          <article className="creative-card" key={item.title}>
            <div className="creative-icon" aria-hidden="true">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="creative-footer">
        <p>Explore more of my artwork and creative projects.</p>

        <a
          href="https://www.instagram.com/art_asmeeta/"
          target="_blank"
          rel="noreferrer"
          className="portfolio-button"
        >
          Explore My Artwork ↗
        </a>
      </div>
    </section>
  );
}

export default CreativeWork;
