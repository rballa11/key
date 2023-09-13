import React from "react";

const EmbeddedLink = ({link, text}) => {
    //const [links, setLink] = useState(link);
    //const [texts, setText] = useState(text);
    return (
        <div>
            <a href = {link} target = "_blank" rel="noreferrer"> {text} </a>
        </div>
    );
    //need to figure out how to define values for link and text
}
export default EmbeddedLink;