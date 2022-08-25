import React from "react";

export const Works = () => {
  return (
    <div className="content" id="sec3">
      <section>
        <div
          className="sect-subtitle right-align-dec"
          data-top-bottom="transform: translateY(200px);"
          data-bottom-top="transform: translateY(-200px);"
        >
          <span>03</span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title algn-right dec-title">
                <span>
                  Our featured <strong>Works</strong>
                </span>
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <div className="parallax-item left-direction">
                <div class="paralax-media">
                  <ul className="creat-list">
                    <li>
                      <a href="#">Houses</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Skyscraper</a>
                    </li>
                  </ul>
                  <div className="paralax-wrap">
                    <img
                      src="./assets/images/folio/thumbs/14.jpg"
                      class="respimg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="parallax-deck"
                  data-top-bottom="transform: translateY(-200px);"
                  data-bottom-top="transform: translateY(200px);"
                >
                  <div className="parallax-deck-item">
                    <h3>
                      Sed ut perspiciatis <strong>unde this</strong>
                    </h3>
                    <a
                      href="portfolio-single.html"
                      class="btn anim-button fl-l"
                    >
                      <span>View Project</span>
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>

          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="parallax-item right-direction">
                <div className="paralax-media">
                  <ul class="creat-list">
                    <li>
                      <a href="#">Interior</a>
                    </li>
                    <li>
                      <a href="#">Wood</a>
                    </li>
                  </ul>
                  <div className="paralax-wrap">
                    <img
                      src="./assets/images/folio/thumbs/17.jpg"
                      className="respimg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="parallax-deck"
                  data-top-bottom="transform: translateY(-200px);"
                  data-bottom-top="transform: translateY(200px);"
                >
                  <div className="parallax-deck-item">
                    <h3>
                      Sed ut perspiciatis <strong>unde this</strong>
                    </h3>
                    <a
                      href="portfolio-single.html"
                      className="btn anim-button fl-l"
                    >
                      <span>View Project</span>
                      <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <div className="parallax-item left-direction">
                <div className="paralax-media">
                  <ul className="creat-list">
                    <li>
                      <a href="#">Houses</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Skyscraper</a>
                    </li>
                  </ul>
                  <div className="paralax-wrap">
                    <img
                      src="./assets/images/folio/thumbs/3.jpg"
                      className="respimg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="parallax-deck"
                  data-top-bottom="transform: translateY(-200px);"
                  data-bottom-top="transform: translateY(200px);"
                >
                  <div className="parallax-deck-item">
                    <h3>
                      Sed ut perspiciatis <strong>unde this</strong>
                    </h3>
                    <a
                      href="portfolio-single.html"
                      class="btn anim-button fl-l"
                    >
                      <span>View Project</span>
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5"></div>
          </div>

          <div className="custom-link-holder">
            <a
              href="portfolio-onepage.html"
              className="btn anim-button"
              data-top-bottom="transform: translateY(-50px);"
              data-bottom-top="transform: translateY(50px);"
            >
              <span>View All Projects</span>
              <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
