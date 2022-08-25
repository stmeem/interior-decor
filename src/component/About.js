import React, { useState, useEffect }  from "react";

export const About = () => {
  return (
    <div className="content" id="sec2">
      <section>
        <div
          className="sect-subtitle right-align-dec"
          data-top-bottom="transform: translateY(200px);"
          data-bottom-top="transform: translateY(-200px);"
        >
          <span>01</span>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="parallax-box slider-box ">
                <div className="single-slider-holder">
                  <div className="single-slider">
                    <div className="item">
                      <img src="./assets/images/folio/slider/3.jpg" alt="" />
                    </div>

                    <div className="item">
                      <img src="./assets/images/folio/slider/2.jpg" alt="" />
                    </div>
                    <div className="item">
                      <img src="./assets/images/folio/slider/1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="customNavigation ssn">
                    <a className="prev-slide transition">
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="next-slide transition">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h2 className="section-title">
                Welcome we <strong> are Heavenly Touch Decor</strong>
              </h2>
              <p>
                Our team takes over everything, from an idea and concept
                development to realization. We believe in traditions and
                incorporate them within our innovations. All our projects
                incorporate a unique artistic image and functional solutions.
                Client is the soul of the project. Our main goal is to
                illustrate his/hers values and individuality through design.
              </p>
              <p>
                Our team takes over everything, from an idea and concept
                development to realization. We believe in traditions and
                incorporate them within our innovations. All our projects
                incorporate a unique artistic image and functional solutions.
                Client is the soul of the project. Our main goal is to
                illustrate his/hers values and individuality through design.
              </p>
              <div className="process-box">
                <h3>Our process</h3>
                <ul className="creat-list">
                  <li>
                    <a>Idea & Start</a>
                  </li>
                  <li>
                    <a>Design & Crate</a>
                  </li>
                  <li>
                    <a>Build & Finish</a>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn anim-button fl-l">
                <span>View Project</span>
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Facts = () => {


  return (
    <div className="content dark-bg">
      <div
        className="sect-subtitle left-align-dec"
        data-top-bottom="transform: translateY(-200px);"
        data-bottom-top="transform: translateY(200px);"
      >
        <span>02</span>
      </div>

      <div className="parallax-inner">
        <div
          className="bg"
          data-bg="./assets/images/bg/1.jpg"
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
                Some Interesting <strong> Facts</strong>
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
              <div className="inline-facts-holder row">
                <div className="inline-facts col-md-4 ">
                  <div className="milestone-counter">
                    <div className="stats animaper">
                      <div className="num" data-content="461" data-num="461">
                        0
                      </div>
                    </div>
                  </div>
                  <h6>Happy customers</h6>
                </div>
                <div className="inline-facts col-md-4">
                  <div className="milestone-counter">
                    <div className="stats animaper">
                      <div className="num" data-content="168" data-num="168">
                        0
                      </div>
                    </div>
                  </div>
                  <h6>Happy customers</h6>
                </div>
                <div className="inline-facts col-md-4">
                  <div className="milestone-counter">
                    <div className="stats animaper">
                      <div className="num" data-content="222" data-num="222">
                        0
                      </div>
                    </div>
                  </div>
                  <h6>Working hours</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
