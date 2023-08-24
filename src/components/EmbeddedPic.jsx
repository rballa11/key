import React from "react";

const imgRedirect = (url) => {
    window.open(url, "_blank");
}


const EmbeddedPic = (link, href) => {
    return (
        <div>
            <img src={link} alt = "link" onClick ={() => imgRedirect(href)}/>
        </div>
    );
}
export default EmbeddedPic;