
import React from "react";


import EmbeddedLink from "../components/EmbeddedLink";

import Logo from "../pics/logo.png"
import keyclub from "../pics/keyclub.png"
import "./home.css"
import InstantLink from "../components/InstantLink";
import NB from "../components/Navbar";

const Home = () => {
    const Leaderstyle = { marginLeft: 300, marginRight: 40, marginTop: 10, marginBottom: 40};
    const Homestyle = { marginLeft: 30, marginRight: 40, marginTop: 10, marginBottom: -40}
    return (
        <div>
        <NB />
        {/*<InstantLink  link = "/" text = "Home" />*/}
        {/*<InstantLink  link = "/leadership" text = "Leadership" />*/}
       <img src = {keyclub} alt = "Key Club" width = "1400" height = "1400" />
        <img src = {Logo} alt = "ORHS Key Club Logo" width = "200" height = "200" />    
        <h2 id = "bruh">Latest News - Remind : @orhskey24</h2>
        
        <h3>Check Slides for Upcoming Volunteering Events!</h3>
        <EmbeddedLink link = "https://docs.google.com/presentation/d/13MrcRFpNese-70itY4Bl29tCwd72PbpxKCUvrs-_rgs/edit?usp=sharing" text = "Google Slides End of September Meeting"/>
        <EmbeddedLink link = "https://docs.google.com/presentation/d/1s_9DIuxsa_KFVteJbhzUkfWnePULghNnzRpibEv6IEE/edit?usp=sharing" text = "Google Slides Early September Meeting"/>
        <EmbeddedLink link = "https://www.instagram.com/keycluborhs/" text = "Insta"/>
        </div>
    );
}
//need to figure out how to get a favicon
export default Home;