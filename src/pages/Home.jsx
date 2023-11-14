
import React from "react";




import Logo from "../pics/logo.png"
import keyclub from "../pics/keyclub.png"


import NB from "../components/Navbar";

const Home = () => {
    //const Leaderstyle = { marginLeft: 300, marginRight: 40, marginTop: 10, marginBottom: 40};
    //const Homestyle = { marginLeft: 30, marginRight: 40, marginTop: 10, marginBottom: -40}
    return (
        <div>
        <NB />
        {/*<InstantLink  link = "/" text = "Home" />*/}
        {/*<InstantLink  link = "/leadership" text = "Leadership" />*/}
       <img src = {keyclub} alt = "Key Club" width = "1400" height = "1400" />
        <img src = {Logo} alt = "ORHS Key Club Logo" width = "200" height = "200" style = {{marginLeft: 600}}/>    
        <h1 class = "h1 display-1" style = {{marginLeft: 300}}>Follow us on Instagram!</h1>
        
        
        </div>
    );
}
//need to figure out how to get a favicon
export default Home;