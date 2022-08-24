import React from "react";

export const Skill = ()=>{
    return(
        <div className="content dark-bg" id="sec4">
        <div className="sect-subtitle left-align-dec" data-top-bottom="transform: translateY(-200px);"
            data-bottom-top="transform: translateY(200px);"><span>04</span></div>
       
        <div className="parallax-inner">
            <div className="bg" data-bg="./assets/images/bg/10.jpg" data-top-bottom="transform: translateY(300px);"
                data-bottom-top="transform: translateY(-300px);"></div>
            <div className="overlay"></div>
        </div>
       
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 class="section-title">Our<strong> Skills</strong></h2>
                    </div>
                    <div className="col-md-8">
                        <p>Our team takes over everything, from an idea and concept development to
                            realization. We believe in traditions and incorporate them within our
                            innovations. All our projects incorporate a unique artistic image and functional
                            solutions. Client is the soul of the project. Our main goal is to illustrate
                            his/hers values and individuality through design.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-8">
                        
                        <div className="piechart-holder animaper" data-skcolor="rgba(255,255,255,0.31)">
                            <div className="row">
                               
                                <div className="piechart col-md-4">
                                    <span className="chart" data-percent="85">
                                        <span className="percent"></span>
                                    </span>
                                    <div className="clearfix"></div>
                                    <div className="skills-description">
                                        <h4>Design</h4>
                                    </div>
                                </div>
                               
                                <div className="piechart col-md-4">
                                    <span className="chart" data-percent="95">
                                        <span className="percent"></span>
                                    </span>
                                    <div className="clearfix"></div>
                                    <div className="skills-description">
                                        <h4>Architecture</h4>
                                    </div>
                                </div>
                               
                                <div className="piechart col-md-4">
                                    <span className="chart" data-percent="80">
                                        <span className="percent"></span>
                                    </span>
                                    <div className="clearfix"></div>
                                    <div className="skills-description">
                                        <h4>Construction</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}