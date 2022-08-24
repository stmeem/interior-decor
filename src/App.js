import "./App.css";
import Loader from "./component/Loader";
import Navbar from "./component/Navbar";
import { Home } from "./component/Home";
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

function App() {
  return (
    <>
      <Loader />
      <div id="main">
        <Navbar />
        <div className="wrapper">
          <div className="content-holder" id="sec1">
            <Home />
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
    </>
  );
}

export default App;
