import React from "react";
import EmbeddedLink from "../components/EmbeddedLink";
import Leadership from "../pics/leadership.png"

const Leader = () => {
    return(
        <div>
            <h1>Leadership of Key Club</h1>
            <EmbeddedLink link = "/" text = "Home"/>
            <img src = {Leadership} alt = "ORHS Leadership" width = "1000" height = "500" /> 
        </div>
    );
}
export default Leader;