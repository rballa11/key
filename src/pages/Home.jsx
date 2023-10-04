
import React from "react";


import EmbeddedLink from "../components/EmbeddedLink";
import Event from "../components/Event"
import Logo from "../pics/logo.png"
import "./home.css"


const Home = () => {
    return (
        <div>
            
        <h1>ORHSKeyClub</h1>
        <EmbeddedLink link = "/leader" text = "Leadership"/>
        <img src = {Logo} alt = "ORHS Key Club Logo" width = "200" height = "200" />    
        <h2>Latest News - Remind : @orhskey24</h2>
        
        <h3>Check Slides for Upcoming Volunteering Events!</h3>
        <EmbeddedLink link = "https://docs.google.com/presentation/d/13MrcRFpNese-70itY4Bl29tCwd72PbpxKCUvrs-_rgs/edit?usp=sharing" text = "Google Slides End of September Meeting"/>
        <EmbeddedLink link = "https://docs.google.com/presentation/d/1s_9DIuxsa_KFVteJbhzUkfWnePULghNnzRpibEv6IEE/edit?usp=sharing" text = "Google Slides Early September Meeting"/>
        <EmbeddedLink link = "https://www.instagram.com/keycluborhs/" text = "Insta"/>
        </div>
    );
}
//need to figure out how to get a favicon
export default Home;