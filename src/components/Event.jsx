import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import EmbeddedLink from "./EmbeddedLink";

const Event = ({title, description, link, date}) =>{
    return(
        <div >
            <EmbeddedLink link = {link} text = {title} />
            <p class = ".lead">{description}</p>

        </div>
    );
}
export default Event