import React from "react";
import EmbeddedLink from "../components/EmbeddedLink";
import NB from "../components/Navbar";
const Events = () => { 
    return (
        <div>
            <NB />
            <EmbeddedLink link = "https://docs.google.com/presentation/d/13MrcRFpNese-70itY4Bl29tCwd72PbpxKCUvrs-_rgs/edit?usp=sharing" text = "Google Slides End of September Meeting"/>
            <EmbeddedLink link = "https://docs.google.com/presentation/d/1s_9DIuxsa_KFVteJbhzUkfWnePULghNnzRpibEv6IEE/edit?usp=sharing" text = "Google Slides Early September Meeting"/>
        </div>
    );
}
export default Events;