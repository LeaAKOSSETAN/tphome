import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function LogoBanner() {
  const logos = [
    { src: "./images/client-logo-1.png", alt: "Logo 1" },
    { src: "/images/client-logo-3.png", alt: "Logo 2" },
    { src: "/images/client-logo-4.png", alt: "Logo 3" },
    { src: "/images/client-logo-1.png", alt: "Logo 4" },
    { src: "/images/client-logo-5.png", alt: "Logo 5" },
  ];

  return (
    <div className="container-flex py-5 bg-body-secondary" style={{marginTop:'10em'}}>
      <div className="row justify-content-center align-items-center">
        {logos.map((logo, index) => (
          <div className="col-2 text-center" key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="img-fluid"
              style={{ maxWidth: "100px", margin: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoBanner;
