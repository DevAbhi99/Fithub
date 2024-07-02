import React from "react";
import './Weightcard.css';


function Weightcard(props){

return (
    <>
    
    <div className="card_main">
        <span><img id="image_alignment" src={props.imagesrc} ></img></span>
        <span id="title_alignment">{props.title}</span>
        <span><a href={props.link}><button id="btn_alignment">{props.name}</button></a></span>
    </div>


    </>
)

}


export default Weightcard;

