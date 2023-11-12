import React from 'react';
import { set } from 'react-hook-form';

const StretchedLink = ({title, context, link }) => {
        const [target, settarget] = React.useState("_blank");
    const a = () => {
        if(link == "#"){
            window.prompt("Work in Progress")
        }
        b()
    }
    const b = () => {
        if(link == "#"){
            settarget("_self")
        }
    }
    return(
        <div>
            <div class="card" style= {{width: "18rem;"}} onClick = {() => a()}>
                {/*<img src="..." class="card-img-top" alt="..."/>*/}
                <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{context}</p>
                <a href={link} class="btn btn-primary stretched-link" target = {target}>Go to slides</a>
            </div>
            </div>

        </div>
    );
};
export default StretchedLink;