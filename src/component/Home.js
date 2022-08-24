import React from "react";

export const Home =  ()=> {
    return(
        <div class="content full-height" id="sec1">
        <div class="hero-wrap">
       
        <div className="bg" data-bg="./assets/images/bg/4.jpg" data-top-bottom="transform: translateY(300px);"
            data-bottom-top="transform: translateY(-300px);"></div>
      
        <div className="overlay"></div>
     
        <div className="hero-wrap-item center-item">
            <h2> Heavenly Home Decor</h2>
            <h3>Architecture</h3>
        </div>
       
        <a href="#sec2" class="hero-scroll-link custom-scroll-link"
            data-top-bottom="transform: translateY(50px);"
            data-bottom-top="transform: translateY(-50px);"><i class="fa fa-angle-down"></i></a>
    </div>
    </div>
    )
}
   