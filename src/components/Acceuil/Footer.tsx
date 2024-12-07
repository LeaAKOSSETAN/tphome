import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between gap-8">
          {/* About Section */}
          <div className="md:w-1/3">
            <h5 className="text-lg font-bold mb-3">ABOUT</h5>
            <p className="text-sm">
              Nulla quis lorem ut libero malesuada feugiat. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi.
              Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus
              nibh.
            </p>
          </div>

          {/* Social Section */}
          <div className="md:w-1/3">
            <h5 className="text-lg font-bold mb-3">SOCIAL</h5>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="text-gray-200 hover:text-blue-500"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-blue-400"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-pink-500"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-red-500"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest text-xl"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:w-1/3">
            <h5 className="text-lg font-bold mb-3">CONTACT US</h5>
            <p className="text-sm">
              500 Terry Francois St.<br />
              San Francisco,<br />
              CA 94158<br />
              +1-410-555-0134<br />
              info@example.com<br />
              contact@example.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Copyright */}
          <p className="mb-2 md:mb-0">
            © 2024 Home Decor | Powered by Home Decor
          </p>

          {/* Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">
              About Us
            </a>
            <a href="#" className="hover:text-blue-400">
              Living Room
            </a>
            <a href="#" className="hover:text-blue-400">
              Kitchen
            </a>
            <a href="#" className="hover:text-blue-400">
              Outdoors
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
