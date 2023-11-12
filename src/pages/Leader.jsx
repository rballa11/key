import React from "react";
import EmbeddedLink from "../components/EmbeddedLink";
import Leadership from "../pics/leadership.png"
import InstantLink from "../components/InstantLink";
import NB from "../components/Navbar";
const Leader = () => {
    return(
        <div>
            <NB />
            <h1 class = "h1 display-1" style = {{marginLeft: 450}}>Leadership!</h1>
            <img src = {Leadership} alt = "ORHS Leadership" style = {{marginLeft: 200}} width = "1000" height = "500" /> 
        </div>
    );
}
export default Leader;