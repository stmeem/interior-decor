import React from "react";

export const Partner = () => {
  return (
    <div className="content dark-bg" id="sec7">
      <div
        className="sect-subtitle left-align-dec"
        data-top-bottom="transform: translateY(-200px);"
        data-bottom-top="transform: translateY(200px);"
      >
        <span>08</span>
      </div>

      <div className="parallax-inner">
        <div
          className="bg"
          data-bg="./assets/images/bg/4.jpg"
          data-top-bottom="transform: translateY(300px);"
          data-bottom-top="transform: translateY(-300px);"
        ></div>
        <div className="overlay"></div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="section-title">
                Our partners <strong> and Clients</strong>
              </h2>
            </div>
            <div className="col-md-8">
              <p>
                Our team takes over everything, from an idea and concept
                development to realization. We believe in traditions and
                incorporate them within our innovations. All our projects
                incorporate a unique artistic image and functional solutions.
                Client is the soul of the project. Our main goal is to
                illustrate his/hers values and individuality through design.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <div className="clients-list">
                <a href="#" target="_blank">
                  <img src="./assets/images/clients/1.png" alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src="./assets/images/clients/2.png" alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src="./assets/images/clients/3.png" alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src="./assets/images/clients/4.png" alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src="./assets/images/clients/5.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
