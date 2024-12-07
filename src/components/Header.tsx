import React from "react";
import styles from "./Header.module.css"; // Assurez-vous que ce fichier existe

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} bg-dark text-white py-3`}>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo ou titre du site */}
        <div className="logo text-center">
          <h1 className="h3">INNOVATION</h1>
          <p className={styles.interiorDesign}>INTERIOR DESIGN</p>
        </div>

        {/* Menu de navigation */}
        <nav>
          <ul className="list-unstyled d-flex m-0">
            <li className="mx-3">
              <a href="#about" className="text-white">About us</a>
            </li>
            <li className="mx-3">
              <a href="#livingRoom" className="text-white">Living Room</a>
            </li>
            <li className="mx-3">
              <a href="#kitchen" className="text-white">Kitchen</a>
            </li>
            <li className="mx-3">
              <a href="#exterior" className="text-white">Outdoors</a>
            </li>
            <li className="mx-3">
              <a href="#contact" className="text-white">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Texte centré */}
      <div className={styles.textContainer}>
        <h2 className={styles.largeText}>Living Room</h2>
        <p className={styles.smallText}>Home Living Room</p>
      </div>
    </header>
  );
};

export default Header;
