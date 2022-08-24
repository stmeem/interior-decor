import React from "react";

function Navbar() {
  return (
    <div>
      <header>
              
                <div className="header-inner">
                  
                    <div className="logo-holder">
                        <a href="index.html"><img src="./assets/images/logo.png" alt=""/></a>
                    </div>
                
                    <div className="nav-button-holder">
                        <div className="nav-button vis-m"><span></span><span></span><span></span></div>
                    </div>
                   
                    <div className="nav-holder">
                        <nav className="scroll-nav">
                            <ul>
                                <li><a className="scroll-link" href="#sec1"  data-bgtex="Home"><span>Home</span></a></li>
                                <li><a className="scroll-link" href="#sec2"  data-bgtex="about us"><span>About</span></a></li>
                                <li><a className="scroll-link" href="#sec3"  data-bgtex="Featured works"><span>Works</span></a></li>
                                <li><a className="scroll-link" href="#sec4"  data-bgtex="Our skills"><span>Skills</span></a></li>
                                <li><a className="scroll-link" href="#sec5"  data-bgtex="Our Team"><span>Team</span></a></li>
                                <li><a className="scroll-link" href="#sec6"  data-bgtex="Our services"><span>Services</span></a></li>
                                <li><a className="scroll-link" href="#sec7"  data-bgtex="contacts"><span>Contacts</span></a></li>
								                <li><a href="blog.html" className="external"><span>Blog</span></a></li>
                            </ul>
                        </nav>
                    </div>
                 
                </div>
            
                <div className="show-share isShare">
                    <i className="fa fa-chain-broken"></i>
                </div>
             
            </header>
    </div>
  );
}

export default Navbar;
