import React from "react";

export const Contact = () => {
  return (
    <div className="content">
      <div
        className="sect-subtitle right-align-dec"
        data-top-bottom="transform: translateY(-200px);"
        data-bottom-top="transform: translateY(200px);"
      >
        <span>09</span>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="section-title">
                Where to <strong>Find us </strong>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.{" "}
              </p>
            </div>
          </div>
          <div className="map-box">
            <div id="map-canvas"></div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-details">
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="bold-title">Contact details : </h3>
                  </div>
                  <div className="col-md-4">
                    <h4>Office in New York</h4>
                    <ul>
                      <li>
                        <a href="#">27th Brooklyn New York, NY 10065</a>
                      </li>
                      <li>
                        <a href="#">+7(111)123456789</a>
                      </li>
                      <li>
                        <a href="#">yourmail@domain.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h4>Find Us On : </h4>
                    <ul>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter </a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contact-form-holder">
                <div id="contact-form">
                  <div id="message"></div>
                  <form
                    method="post"
                    action="php/contact.php"
                    name="contactform"
                    id="contactform"
                  >
                    <input
                      name="name"
                      type="text"
                      id="name"
                      onClick="this.select()"
                      value="Name"
                    />
                    <input
                      name="email"
                      type="text"
                      id="email"
                      onClick="this.select()"
                      value="E-mail"
                    />
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      onClick="this.select()"
                      value="Phone"
                    />
                    <textarea
                      name="comments"
                      id="comments"
                      onClick="this.select()"
                    >
                      Message
                    </textarea>
                    <div className="verify-wrap">
                      <span className="verify-text">
                        {" "}
                        How many gnomes were in the story about the "Snow-white"
                        ?
                      </span>
                      <input
                        name="verify"
                        type="text"
                        id="verify"
                        onClick="this.select()"
                        value="0"
                      />
                    </div>
                    <button type="submit" id="submit">
                      <span>Send Message </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
