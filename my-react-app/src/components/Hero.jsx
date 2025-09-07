import React from "react";

const Hero = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) translateX(15px) scale(1.15); opacity: 0.7; }
        }

        .background-container {
          position: fixed;
          inset: 0;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(135deg, #b76e79, #a17fe0, #5dc1b9, #f5b971, #d96c3e, #6a1b4d);
          background-size: 1200% 1200%;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          animation: floatUpDown 7s ease-in-out infinite;
          filter: blur(12px);
          mix-blend-mode: screen;
        }

        .circle1 { width: 220px; height: 220px; top: 10%; left: 15%; animation-delay: 0s; }
        .circle2 { width: 300px; height: 300px; top: 45%; right: 10%; animation-delay: 2.5s; }
        .circle3 { width: 180px; height: 180px; bottom: 15%; left: 30%; animation-delay: 5s; }

        section.hero {
          min-height: 100vh;
          padding: 6rem 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          position: relative;
          font-family: 'Poppins', sans-serif;
          z-index: 10;
        }

        .content-wrapper {
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
        }

        h1.title {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(4rem, 9vw, 6.5rem);
          font-weight: 400;
          margin-bottom: 2rem;
          text-shadow: 0 8px 20px rgba(0,0,0,0.9);
          letter-spacing: 0.05em;
          user-select: none;
        }

        p.subtitle {
          font-size: clamp(1.3rem, 2.8vw, 1.6rem);
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 3.5rem;
          font-weight: 500;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.03em;
          user-select: none;
        }

        .image-card {
          position: relative;
          width: 100%;
          max-width: 650px;
          height: 360px;
          margin: 3rem auto;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
          background-image:
            url('https://images.unsplash.com/photo-1524492412937-4961d66aa114?auto=format&fit=crop&w=900&q=80'),
            linear-gradient(to bottom right, rgba(217,108,62,0.7), rgba(166,75,42,0.4));
          background-blend-mode: overlay;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          user-select: none;
        }

        .image-card:hover {
          transform: scale(1.08);
          box-shadow: 0 30px 65px rgba(0,0,0,0.5);
        }

        .image-overlay-pattern {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='rgba(255,255,255,0.25)'%3E%3Cpath d='M50 10a40 40 0 0 1 40 40c0 22-18 40-40 40S10 72 10 50s18-40 40-40zm0 4a36 36 0 0 0-36 36c0 20 16 36 36 36s36-16 36-36-16-36-36-36z'/%3E%3Cpath d='M50 20a30 30 0 0 1 30 30c0 16-13 30-30 30S20 66 20 50s13-30 30-30zm0 4a26 26 0 0 0-26 26c0 14 11 26 26 26s26-11 26-26-11-26-26-26z'/%3E%3C/g%3E%3C/svg%3E");
          background-size: cover;
          opacity: 0.4;
          pointer-events: none;
          z-index: 1;
          border-radius: 28px;
        }

        .image-text {
          position: relative;
          z-index: 2;
          color: white;
          font-size: 3.5rem;
          font-weight: 700;
          text-shadow: 0 6px 18px rgba(0,0,0,0.85);
          margin-top: 150px;
          user-select: none;
          letter-spacing: 0.06em;
        }

        .image-bottom-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 35%;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 1.2rem;
          z-index: 3;
          font-weight: 600;
          color: white;
          font-size: 1.2rem;
          text-shadow: 0 3px 12px rgba(0,0,0,0.8);
          user-select: none;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.04em;
        }

        .button-primary {
          background-color: #d96c3e;
          color: white;
          padding: 1rem 3rem;
          border-radius: 14px;
          border: none;
          font-weight: 600;
          font-size: 1.15rem;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(217, 108, 62, 0.4);
          transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          font-family: 'Poppins', sans-serif;
          user-select: none;
        }

        .button-primary:hover {
          background-color: #b55a30;
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(166, 75, 42, 0.55);
        }

        .fadeInUp {
          opacity: 0;
          transform: translateY(25px);
          animation-fill-mode: forwards;
          animation-name: fadeInUpAnim;
          animation-duration: 1.2s;
          animation-timing-function: ease-out;
        }

        @keyframes fadeInUpAnim {
          to { opacity: 1; transform: translateY(0); }
        }

        .fadeInUp.delay-0 { animation-delay: 0s; }
        .fadeInUp.delay-1 { animation-delay: 0.3s; }
        .fadeInUp.delay-2 { animation-delay: 0.7s; }
        .fadeInUp.delay-3 { animation-delay: 1s; }

        @media (max-width: 768px) {
          .image-text { font-size: 2.6rem; }
          h1.title { font-size: clamp(3rem, 8vw, 4.5rem); }
          p.subtitle { font-size: clamp(1rem, 2.5vw, 1.2rem); }
          .image-card { height: 300px; }
          section.hero { padding: 4rem 1.5rem; }
        }
      `}</style>

      <div className="background-container" aria-hidden="true">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>

      <section className="hero" role="main" aria-label="Hero Section">
        <div className="content-wrapper">
          <h1 className="title fadeInUp delay-0">
            AI-Powered Artisan Marketplace
          </h1>
          <p className="subtitle fadeInUp delay-1">
            Connecting Indian artisans to the world through generative AI, celebrating their stories and craftsmanship.
          </p>
          <div className="image-card fadeInUp delay-2" tabIndex={0} aria-label="Image of artisan work with overlay text">
            <div className="image-overlay-pattern"></div>
            <span className="image-text">Artisan Craft</span>
            <div className="image-bottom-label">Timeless Handcrafted Excellence</div>
          </div>
          <button className="button-primary fadeInUp delay-3" aria-label="Discover Artisan Stories">
            Discover Artisan Stories
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;