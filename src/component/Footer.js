import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="height-emulator"></div>
      <footer cclassName="content-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div cclassName="footer-item footer-logo">
                <a href="index.html" className="ajax">
                  <img src="./assets/images/footer-logo.png" alt="" />
                </a>
                <p>
                  Our team takes over everything, from an idea and concept
                  development to realization. We believe in traditions and
                  incorporate them within our innovations.Client is the soul of
                  the project.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="text-link">Call</h4>
                <ul>
                  <li>
                    <a href="#">+7(111)123456789</a>
                  </li>
                  <li>
                    <a href="#">+1(000)987654321</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="text-link">Write</h4>
                <ul>
                  <li>
                    <a href="#">yourmail@domain.com</a>
                  </li>
                  <li>
                    <a href="#">email@website.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="text-link">Visit</h4>
                <ul>
                  <li>
                    <span>USA 27TH BROOKLYN NY</span>
                  </li>
                  <li>
                    {" "}
                    <a href="" target="_blank">
                      View on map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div classNames="footer-wrap">
                <span className="copyright">
                  {" "}
                  &#169; Monolit 2016. All rights reserved.
                </span>
                <span className="to-top">To Top</span>
              </div>
            </div>
          </div>
        </div>

        <canvas className="particular"></canvas>
      </footer>

      <div className="share-inner">
        <div
          className="share-container  isShare"
          data-share="['facebook','googleplus','twitter','linkedin']"
        ></div>
        <div className="close-share"></div>
      </div>
    </>
  );
};
