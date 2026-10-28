import React from "react";

function Entrepreneurship() {
  return (
    <section id="entrepreneurship">
      <h2 className="title">Entrepreneurship</h2>

      <div className="entrepreneurship-card">
        <div className="business-content">
          <span className="section-eyebrow">MY BUSINESS VENTURE</span>

          <h3>SORA &amp; STONE</h3>

          <p className="business-tagline">
            Objects for calm, intentional living.
          </p>

          <p className="business-description">
            SORA &amp; STONE is a home, wellness and lifestyle brand inspired by
            thoughtful products and intentional living. As a co-founder, I
            contribute to developing the brand's identity, online store and
            digital customer experience.
          </p>

          <div className="business-focus">
            <span>Brand Development</span>
            <span>Shopify &amp; E-commerce</span>
            <span>Product Presentation</span>
            <span>Social Media Content</span>
            <span>Customer Experience</span>
          </div>

          <p className="business-note">
            Building a brand has given me an opportunity to explore
            entrepreneurship, digital commerce and creative problem-solving.
          </p>

          <div className="business-links">
            <a
              href="https://soraandstone.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-button"
            >
              Visit Website ↗
            </a>

            <a
              href="https://www.instagram.com/soraandstone.co/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Instagram →
            </a>
          </div>
        </div>

        <div className="business-side">
          <div className="business-monogram">S&amp;S</div>
          <p>HOME · WELLNESS · LIFESTYLE</p>
          <span>Thoughtfully chosen. Intentionally lived.</span>
        </div>
      </div>
    </section>
  );
}

export default Entrepreneurship;
