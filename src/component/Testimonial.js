import React from "react";

export const Testimonial = () => {
  return (
    <div className="content dark-bg">
      <div
        className="sect-subtitle left-align-dec"
        data-top-bottom="transform: translateY(-200px);"
        data-bottom-top="transform: translateY(200px);"
      >
        <span>06</span>
      </div>
      <div className="parallax-inner">
        <div
          className="bg"
          data-bg="images/bg/2.jpg"
          data-top-bottom="transform: translateY(300px);"
          data-bottom-top="transform: translateY(-300px);"
        ></div>
        <div className="overlay"></div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="section-title">Testimonials</h2>
            </div>
            <div className="col-md-8">
              <div className="testimon-slider-holder">
                <div className="testimon-slider">
                  <div className="item">
                    <h3>Andy Smith</h3>
                    <p>
                      "All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words"
                    </p>
                    <a href="#" className="text-link" target="_blank">
                      Via Twitter
                    </a>
                  </div>

                  <div className="item">
                    <h3>Liza Mirovsky</h3>
                    <p>
                      "Vestibulum orci felis, ullamcorper non condimentum non,
                      ultrices ac nunc. Mauris non ligula suscipit, vulputate mi
                      accumsan, dapibus felis. Nullam sed sapien dui. Nulla
                      auctor sit amet sem non porta. Integer iaculis tellus
                      nulla, quis imperdiet magna venenatis vitae"
                    </p>
                    <a href="#" className="text-link" target="_blank">
                      Via Facebook
                    </a>
                  </div>

                  <div className="item">
                    <h3>Gary Trust</h3>
                    <p>
                      "If you are going to use a passage of Lorem Ipsum, you
                      need to be sure there isn't anything embarrassing hidden
                      in the middle of text."
                    </p>
                    <a href="#" className="text-link" target="_blank">
                      Via Myspace
                    </a>
                  </div>
                </div>
                <div className="customNavigation">
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
        </div>
      </section>
    </div>
  );
};
