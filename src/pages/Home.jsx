
import React from "react";
import EmbeddedPic from "../components/EmbeddedPic";
import insta from "../pics/insta.png";
import EmbeddedLink from "../components/EmbeddedLink";
import Event from "../components/Event"
import logo from "../pics/logo.png"


const Home = () => {
    return (
        <div>
        <h1>ORHSKeyClub</h1>
        <link rel="icon" href= "../pics/logo.png" />
        <EmbeddedLink link = "https://docs.google.com/presentation/d/1s_9DIuxsa_KFVteJbhzUkfWnePULghNnzRpibEv6IEE/edit?usp=sharing" text = "Google Slides"/>
        <EmbeddedLink link = "https://www.instagram.com/keycluborhs/" text = "Insta"/>
        <Event style = {{marginLeft: ".5em"}} title = "bruh" description = "mid" link = "https://getbootstrap.com/docs/4.0/content/typography/" date = "March 5th, 2023" />
        
        </div>
    );
}
//need to figure out how to get a favicon
export default Home;