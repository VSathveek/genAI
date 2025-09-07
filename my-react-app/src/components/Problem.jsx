import React from "react";

const Problem = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>{`
      section.problem {
        position: relative;
        overflow: hidden;
        border-radius: 28px;
        padding: 5rem 2.5rem 7rem;
        max-width: 950px;
        margin: 4rem auto;
        font-family: 'Poppins', sans-serif;
        color: #1e2a3a;
        box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
        background: linear-gradient(135deg, #ffd1e3 0%, #b4f4e8 100%);
        text-align: center;
      }

      .blob1 {
        position: absolute;
        top: -150px;
        left: -120px;
        width: 450px;
        height: 450px;
        z-index: 0;
        opacity: 0.3;
        filter: blur(20px);
      }

      .blob2 {
        position: absolute;
        bottom: -120px;
        right: -100px;
        width: 400px;
        height: 400px;
        z-index: 0;
        opacity: 0.35;
        filter: blur(15px);
      }

      .content-container {
        position: relative;
        z-index: 1;
        max-width: 750px;
        margin: 0 auto;
      }

      h2 {
        font-weight: 700;
        font-size: clamp(2.5rem, 6vw, 4rem);
        margin-bottom: 1.5rem;
        color: #2c2e3f;
        text-shadow: 0 5px 8px rgba(255, 111, 145, 0.4);
      }

      p {
        font-size: clamp(1.1rem, 2.5vw, 1.3rem);
        line-height: 1.9;
        margin-bottom: 3.5rem;
        color: #4a4a57;
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
        section.problem { text-align: left; }
        h2 { font-size: clamp(3rem, 7vw, 4.5rem); }
        p { font-size: clamp(1.2rem, 2.8vw, 1.4rem); max-width: 650px; }
      }
    `}</style>

    <section className="problem">
      <svg className="blob1" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="200" r="160" fill="#FF6F91" />
        <circle cx="300" cy="150" r="140" fill="#845EC2" />
        <circle cx="200" cy="300" r="110" fill="#FFC75F" />
      </svg>
      <svg className="blob2" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="200" rx="170" ry="170" fill="#00C9A7" />
        <ellipse cx="250" cy="150" rx="130" ry="130" fill="#008F7A" />
      </svg>
      <div className="content-container">
        <h2>The Challenge Faced by Artisans</h2>
        <p>
          Indian artisans preserve centuries of cultural heritage, yet struggle to gain visibility in a fast-paced digital world. Without access to modern marketing tools, their exquisite craftsmanship often remains unseen globally.
        </p>
        <svg className="illustration" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6F91" />
              <stop offset="100%" stopColor="#845EC2" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFC75F" />
              <stop offset="100%" stopColor="#00C9A7" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="85" fill="url(#grad1)" opacity="0.9" />
          <ellipse cx="130" cy="80" rx="65" ry="45" fill="url(#grad2)" opacity="0.75" />
          <path d="M60 140 Q80 110 110 130 T150 120" stroke="#fff" strokeWidth="6" fill="none" opacity="0.55" />
          <circle cx="50" cy="50" r="22" fill="#FF6F91" opacity="0.85" />
          <circle cx="160" cy="160" r="18" fill="#008F7A" opacity="0.65" />
        </svg>
      </div>
    </section>
  </>
);

export default Problem;