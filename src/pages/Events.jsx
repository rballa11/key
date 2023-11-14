import React from "react";
import NB from "../components/Navbar";
import StretchedLink from "../components/StretchedLink";
import volunteer from "../pics/volunteering.jpg";
const Events = () => { 
    const voluneerImage = {volunteer};
    return (
        <div>
            <NB />
            <div style = {{backgroundImage: voluneerImage}} >
                {/*<img  src = {volunteer} alt = "Volunteering"/>*/}
                <span class="display-4 overlay-text" style = {{marginLeft:600}}>Volunteer!</span>
            </div>
            <StretchedLink title = "December " context = "Check out the slides for upcoming volunteering events!(Not yet released)" link = "#"/>    
            <StretchedLink title = "November " context = "Check out the slides for upcoming volunteering events!(Not yet released)" link = "#" />
            <StretchedLink title = "October " context = "Check out the slides for upcoming volunteering events!" link = "https://docs.google.com/presentation/d/1s_9DIuxsa_KFVteJbhzUkfWnePULghNnzRpibEv6IEE/edit?usp=sharing"/>
            <StretchedLink title = "September " context = "Check out the slides for upcoming volunteering events!" link = "https://docs.google.com/presentation/d/13MrcRFpNese-70itY4Bl29tCwd72PbpxKCUvrs-_rgs/edit?usp=sharing"/>
            
        </div>
    );
}
export default Events;