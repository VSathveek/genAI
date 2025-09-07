import React from "react";

const Impact = () => (
  <>
    {/* Google Fonts */}
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />

    <section
      style={{
        position: "relative",
        padding: "5rem 2rem 6rem",
        maxWidth: "900px",
        margin: "4rem auto",
        borderRadius: "24px",
        background:
          "radial-gradient(circle at center, #c8e6c9 0%, #81c784 70%, #4caf50 100%)",
        color: "#1b3e2a",
        boxShadow: "0 15px 35px rgba(27, 62, 42, 0.25)",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Abstract Leafy Shapes */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-70px",
          left: "-90px",
          width: "220px",
          height: "220px",
          opacity: 0.25,
          filter: "blur(30px)",
          zIndex: 0,
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5d6a7" />
            <stop offset="100%" stopColor="#4caf50" />
          </linearGradient>
        </defs>
        <path
          fill="url(#leafGrad1)"
          d="M100 10 C140 40, 180 90, 140 160 C100 180, 60 130, 40 80 C30 50, 60 20, 100 10 Z"
          opacity="0.8"
        />
      </svg>

      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-100px",
          width: "250px",
          height: "250px",
          opacity: 0.2,
          filter: "blur(25px)",
          zIndex: 0,
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="leafGrad2"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#a5d6a7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#388e3c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="100" cy="100" rx="90" ry="60" fill="url(#leafGrad2)" />
      </svg>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontWeight: "700",
            fontSize: "3rem",
            marginBottom: "1.5rem",
            textShadow: "0 2px 6px rgba(0,0,0,0.1)",
            color: "#2e582e",
          }}
        >
          Our Impact
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75",
            fontWeight: "500",
            color: "#264d26",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Harnessing AI, we empower thousands of artisans to transform their traditional skills into
          thriving digital brands — securing livelihoods while preserving rich heritage through
          innovation.
        </p>
      </div>

      {/* Subtle animated circles */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "60px",
          height: "60px",
          opacity: 0.15,
          zIndex: 0,
        }}
      >
        <circle
          cx="30"
          cy="30"
          r="30"
          fill="rgba(76, 175, 80, 0.6)"
          style={{
            animation: "pulse 4s infinite ease-in-out",
            transformOrigin: "center",
          }}
        />
      </svg>

      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "25%",
          left: "8%",
          width: "45px",
          height: "45px",
          opacity: 0.2,
          zIndex: 0,
        }}
      >
        <circle
          cx="22.5"
          cy="22.5"
          r="22.5"
          fill="rgba(165, 214, 167, 0.6)"
          style={{
            animation: "pulse 5s infinite ease-in-out 1s",
            transformOrigin: "center",
          }}
        />
      </svg>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.25rem !important;
          }
          p {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  </>
);

export default Impact;
