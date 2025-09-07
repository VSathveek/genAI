import React from "react";

const Solution = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>{`
      section.solution {
        position: relative;
        overflow: hidden;
        border-radius: 28px;
        padding: 5rem 2.5rem 7rem;
        max-width: 950px;
        margin: 4rem auto;
        font-family: 'Poppins', sans-serif;
        color: #124559;
        box-shadow: 0 22px 45px rgba(18, 69, 89, 0.12);
        background: linear-gradient(135deg, #c2edf2 0%, #d8fffa 100%);
        text-align: center;
      }

      .shape1 {
        position: absolute;
        top: -150px;
        left: -120px;
        width: 450px;
        height: 450px;
        z-index: 0;
        opacity: 0.3;
        filter: blur(20px);
      }

      .shape2 {
        position: absolute;
        bottom: -120px;
        right: -100px;
        width: 400px;
        height: 400px;
        z-index: 0;
        opacity: 0.35;
        filter: blur(15px);
      }

      .solution-container {
        position: relative;
        z-index: 1;
        max-width: 750px;
        margin: 0 auto;
      }

      h2 {
        font-weight: 700;
        font-size: clamp(2.5rem, 6vw, 4rem);
        margin-bottom: 1.5rem;
        color: #0d3c44;
        text-shadow: 0 5px 8px rgba(18, 69, 89, 0.3);
      }

      p {
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        line-height: 1.9;
        margin-bottom: 3.5rem;
        color: #206a71;
        font-weight: 500;
        letter-spacing: 0.03em;
      }

      .illustration {
        display: block;
        margin: 0 auto;
        max-width: 300px;
        height: auto;
        filter: drop-shadow(0 5px 8px rgba(0,0,0,0.15));
      }

      @media (min-width: 768px) {
        section.solution { text-align: left; }
        h2 { font-size: clamp(3rem, 7vw, 4.5rem); }
        p { font-size: clamp(1.2rem, 2.8vw, 1.4rem); max-width: 650px; }
      }
    `}</style>

    <section className="solution">
      <svg className="shape1" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="200" r="160" fill="#43cea2" />
        <circle cx="300" cy="150" r="140" fill="#185a9d" />
        <circle cx="200" cy="300" r="110" fill="#7de2d1" />
      </svg>
      <svg className="shape2" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="200" rx="170" ry="170" fill="#95e1d3" />
        <ellipse cx="250" cy="150" rx="130" ry="130" fill="#6bc5b8" />
      </svg>
      <div className="solution-container">
        <h2>Our Innovative Solution</h2>
        <p>
          Our generative AI-powered platform empowers artisans to create compelling product stories, generate engaging digital content, and connect with modern customers—all without needing technical expertise.
        </p>
        <svg className="illustration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#43cea2" />
              <stop offset="100%" stopColor="#185a9d" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7de2d1" />
              <stop offset="100%" stopColor="#206a71" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="85" fill="url(#grad1)" opacity="0.9" />
          <ellipse cx="130" cy="80" rx="65" ry="45" fill="url(#grad2)" opacity="0.75" />
          <path d="M60 140 Q80 110 110 130 T150 120" stroke="#fff" strokeWidth="6" fill="none" opacity="0.55" />
          <circle cx="50" cy="50" r="22" fill="#43cea2" opacity="0.85" />
          <circle cx="160" cy="160" r="18" fill="#185a9d" opacity="0.65" />
        </svg>
      </div>
    </section>
  </>
);

export default Solution;