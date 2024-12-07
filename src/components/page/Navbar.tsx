import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="#">
            <img
              src="/images/WhatsApp.png"
              alt="Logo"
              className="img-fluid"
            />
          </a>

          
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

          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active custom-design space text-light" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-design text-light" href="#">Living Room</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-design text-light" href="#">Kitchen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-design text-light" href="#">Outdoors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-design text-light" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container text-center text-light space-h1">
        <h3 className="mb-3">Know More</h3>
        <h1 className="space-h1 mt-3">About Us</h1>
        <br />
      </div>
      </header>
    </>
  );
}

export default Navbar;
