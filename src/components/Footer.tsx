import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row text-center">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>ABOUT</h5>
            <p>
              Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, 
              convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id 
              orci porta dapibus. Sed porttitor lectus nibh.
            </p>
          </div>

          {/* Social Section */}
          <div className="col-md-4 mb-3">
            <h5>SOCIAL</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white me-3 social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-3 social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3 social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white me-3 social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white me-3 social-icon">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5>CONTACT US</h5>
            <p>
              500 Terry Francois St.<br />
              San Francisco,<br />
              CA 94158<br />
              +1-410-555-0134 |<br />
              info@example.com<br />
              contact@example.com<br />
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr  />

        <div className="d-flex justify-content-between mt-3">
          {/* Copyright - Align Left */}
          <div className="text-left">
            <p className="mb-0">
              Copyright © 2024 Home Decor | Powered by Home Decor
            </p>
          </div>

          {/* Links - Align Right */}
          <div className="text-right">
            <p className="mb-0">
              <a href="#" className="text-white">About Us</a> | 
              <a href="#" className="text-white"> Living Room</a> |
              <a href="#" className="text-white"> Kitchen</a> | 
              <a href="#" className="text-white"> Outdoors</a> | 
              <a href="#" className="text-white"> Contact</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
