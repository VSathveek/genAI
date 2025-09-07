import React from "react";

const Features = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>{`
      section.features {
        position: relative;
        overflow: hidden;
        padding: 5rem 2.5rem 7rem;
        max-width: 950px;
        margin: 4rem auto;
        border-radius: 28px;
        background: linear-gradient(135deg, #fff4cc 0%, #f7e08a 100%);
        font-family: 'Poppins', sans-serif;
        color: #665233;
        box-shadow: 0 18px 40px rgba(102, 82, 51, 0.18);
        text-align: center;
      }

      .circle-bg1 {
        position: absolute;
        top: -100px;
        right: -120px;
        width: 320px;
        height: 320px;
        z-index: 0;
        opacity: 0.25;
        filter: blur(45px);
      }

      .circle-bg2 {
        position: absolute;
        bottom: -90px;
        left: -100px;
        width: 280px;
        height: 280px;
        z-index: 0;
        opacity: 0.2;
        filter: blur(35px);
      }

      .features-container {
        position: relative;
        z-index: 1;
        max-width: 750px;
        margin: 0 auto;
      }

      h2 {
        font-weight: 700;
        font-size: clamp(2.5rem, 6vw, 4rem);
        margin-bottom: 2.5rem;
        color: #8c6c2f;
        text-shadow: 0 4px 8px rgba(140, 108, 47, 0.3);
      }

      ul {
        list-style: none;
        padding: 0;
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        font-weight: 500;
        line-height: 2.2;
        max-width: 500px;
        margin: 0 auto;
        color: #7a6239;
      }

      li {
        cursor: default;
        transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
        border-radius: 14px;
        padding: 0.6rem 1.2rem;
        margin-bottom: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background-color: rgba(255, 255, 255, 0.1);
      }

      li:hover {
        color: #a67800;
        transform: scale(1.06);
        background-color: rgba(255, 255, 255, 0.2);
      }

      .illustration {
        display: block;
        margin: 3.5rem auto 0;
        max-width: 300px;
        height: auto;
        filter: drop-shadow(0 5px 8px rgba(0,0,0,0.15));
      }

      @media (min-width: 768px) {
        section.features { text-align: left; }
        h2 { font-size: clamp(3rem, 7vw, 4.5rem); }
        ul { font-size: clamp(1.2rem, 2.8vw, 1.4rem); max-width: 550px; }
      }
    `}</style>

    <section className="features">
      <svg className="circle-bg1" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#f9d423" />
      </svg>
      <svg className="circle-bg2" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="100" rx="90" ry="70" fill="#f6d365" />
      </svg>
      <div className="features-container">
        <h2>Key Features</h2>
        <ul>
          {[
            { icon: "🧠", text: "AI Story Generator for Products" },
            { icon: "🛍️", text: "Smart Digital Shop Builder" },
            { icon: "📈", text: "Personalized Marketing Insights" },
            { icon: "🌐", text: "Multi-language Content Generation" },
            { icon: "🤝", text: "Artisan Community Support" },
          ].map(({ icon, text }, i) => (
            <li key={i}>
              <span style={{ fontSize: "1.6rem" }}>{icon}</span> {text}
            </li>
          ))}
        </ul>
        <svg className="illustration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f6d365" />
              <stop offset="100%" stopColor="#fda085" />
            </linearGradient>
            <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9d423" />
              <stop offset="100%" stopColor="#f6d365" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="85" fill="url(#gradA)" opacity="0.9" />
          <ellipse cx="130" cy="80" rx="65" ry="45" fill="url(#gradB)" opacity="0.75" />
          <path d="M60 140 Q80 110 110 130 T150 120" stroke="#fff" strokeWidth="6" fill="none" opacity="0.55" />
          <circle cx="50" cy="50" r="22" fill="#f9d423" opacity="0.85" />
          <circle cx="160" cy="160" r="18" fill="#fda085" opacity="0.65" />
        </svg>
      </div>
    </section>
  </>
);

export default Features;