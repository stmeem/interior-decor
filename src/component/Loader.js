import React from "react";
function Loader(){
    return(
        <div className="loader">
            <div id="movingBallG">
                <div className="movingBallLineG"></div>
                <div id="movingBallG_1" className="movingBallG"></div>
            </div>
        </div>
    )
}
export default Loader;