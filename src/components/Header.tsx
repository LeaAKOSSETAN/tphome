import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Vous pouvez ajouter vos styles spécifiques ici

const HeaderSection: React.FC = () => {
  return (
    <header className="bg-dark text-white">
      {/* Barre de navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span>INNOVATION INTERIOR DESIGN</span>
          </a>

          {/* Bouton menu pour écrans petits */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens du menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#living-room">
                  Living Room
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kitchen">
                  Kitchen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#outdoors">
                  Outdoors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Section principale */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1920x600')", // Remplacez par votre image d'arrière-plan
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <h1 className="display-4 fw-bold">Living Room</h1>
        <p className="text-uppercase">Home &gt; Living Room</p>
      </div>
    </header>
  );
};

export default HeaderSection;
