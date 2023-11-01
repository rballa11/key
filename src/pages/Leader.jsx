import React from "react";
import EmbeddedLink from "../components/EmbeddedLink";
import Leadership from "../pics/leadership.png"
import InstantLink from "../components/InstantLink";
import NB from "../components/Navbar";
const Leader = () => {
    return(
        <div>
            <NB />
            <h1>Leadership of Key Club</h1>
            <img src = {Leadership} alt = "ORHS Leadership" width = "1000" height = "500" /> 
        </div>
    );
}
export default Leader;