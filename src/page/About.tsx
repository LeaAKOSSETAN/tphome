import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <br />

      <div className="container text-center">
        <div className="row align-items-center"> 
         
          <div className="col-md-6 d-flex justify-content-center"> 
            <img
              src="/images/pic14-free-img.png"
              alt="Logo"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "30em",
                marginTop: "7em",
                objectFit: "cover", 
              }}
            />
          </div>

          
          <div className="col-md-6 d-flex justify-content-center mt-5">
            <div className="text-container" style={{ maxWidth: "30rem" }}>
              <h1 style={{ textAlign: "justify" }}>Working Since 1995</h1>

               <hr />
             
              <div style={{ textAlign: "justify" }}>
                <p>
                  Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus,
                  vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse. Taciti alias conubia,
                  senectus, soluta nisl interdum vitae eius habitant metus.
                </p>
              </div>
              <h4 style={{ textAlign: "justify" }}>Design is a funny word</h4>
              <br />
              <div style={{ textAlign: "justify" }}>
                <p>
                  Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus,
                  vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse. Taciti alias conubia,
                  senectus, soluta nisl interdum vitae eius habitant metus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
