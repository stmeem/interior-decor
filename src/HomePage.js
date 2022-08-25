import "./App.css";
import Loader from "./component/Loader";
import Navbar from "./component/Navbar";
import { Hero } from "./component/Hero";
import { About, Facts } from "./component/About";
import { Works } from "./component/Works";
import { Skill } from "./component/Skill";
import { Team } from "./component/Team";
import { Testimonial } from "./component/Testimonial";
import { Service } from "./component/Services";
import { Partner } from "./component/Partner";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import { Social } from "./component/Social";

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
