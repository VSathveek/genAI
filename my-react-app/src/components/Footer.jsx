import React from "react";

const Footer = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <style>{`
      footer {
        background: linear-gradient(135deg, #1e2a38 0%, #2c3e50 100%);
        color: #ecf0f1;
        padding: 3.5rem 2rem;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        box-shadow: 0 -6px 15px rgba(0,0,0,0.35);
        user-select: none;
      }

      .footer-text {
        margin: 0 0 0.6rem;
        font-weight: 600;
        font-size: 1.05rem;
      }

      .footer-contact {
        margin: 0;
        font-size: 0.95rem;
      }

      .footer-contact a {
        color: #1abc9c;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease, transform 0.3s ease;
      }

      .footer-contact a:hover {
        color: #16a085;
        transform: translateY(-2px);
      }
    `}</style>

    <footer>
      <p className="footer-text">
        &copy; 2025 AI Artisan Platform. Built with{" "}
        <span role="img" aria-label="heart" style={{ color: "#e74c3c" }}>
          ❤️
        </span>{" "}
        to empower local creativity.
      </p>
      <p className="footer-contact">
        Contact:{" "}
        <a
          href="mailto:artisans@aiplatform.in"
          onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
        >
          artisans@aiplatform.in
        </a>
      </p>
    </footer>
  </>
);

export default Footer;