import "../component/Homepage/Homepage.scoped.css";
import "../component/Homepage/reset.scoped.css";
import "../component/Homepage/plugins.scoped.css";


import Loader from "../component/Homepage/Loader";
import Navbar from "../component/Homepage/Navbar";
import { Hero } from "../component/Homepage/Hero";
import { About, Facts } from "../component/Homepage/About";
import { Works } from "../component/Homepage/Works";
import { Skill } from "../component/Homepage/Skill";
import { Team } from "../component/Homepage/Team";
import { Testimonial } from "../component/Homepage/Testimonial";
import { Service } from "../component/Homepage/Services";
import { Partner } from "../component/Homepage/Partner";
import { Contact } from "../component/Homepage/Contact";
import { Footer } from "../component/Homepage/Footer";
import { Social } from "../component/Homepage/Social";

function HomePage() {
  return (
    <>
    <html>
      <body>
      <Loader />
      <div id="main">
        <Navbar />
        <div className="wrapper">
          <div className="content-holder">
            <Hero />
            <About />
            <Facts />
            <Works />
            <Skill />
            <Team />
            <Testimonial/>
            <Service/>
            <Partner/>
            <Contact/>
            <Footer/>
          </div>
        </div>
        <Social/>
      </div>
      </body>
    </html>
    </>
  );
}

export default HomePage;
