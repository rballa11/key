import React from "react";

const InstantLink = ({link, text, style}) => {
    //const [links, setLink] = useState(link);
    //const [texts, setText] = useState(text);
    return (
        <div>
            <a href = {link} rel="noreferrer" style = {style}> {text} </a>
        </div>
    );
    //need to figure out how to define values for link and text
}
export default InstantLink;