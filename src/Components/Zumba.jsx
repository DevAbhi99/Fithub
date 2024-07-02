import React from "react";
import './Zumba.css';
import Weightcard from "./Weightcard";

function Zumba(){
    return(
<>
<div class='nav_bar' >
<div className='title_bar'><p className="title_fitapp"><i>FitHub</i></p></div>
</div>
<p>
   
Zumba offers a multitude of advantages, blending physical fitness with vibrant, dance-based workouts. It provides a fun and engaging way to improve cardiovascular health, enhance flexibility, and boost overall strength. The high-energy routines, set to lively music, make exercise enjoyable, helping participants stay motivated and consistent with their fitness goals. Additionally, Zumba fosters a sense of community and social interaction, which can enhance mental well-being and reduce stress. Its adaptable nature makes it suitable for all fitness levels, ensuring that everyone can participate and benefit from this dynamic and inclusive exercise program. 
</p>
<p id="weight_info"></p>
<p></p>
    <div className="zumba_alignment">
        <span><Weightcard imagesrc="https://tse1.mm.bing.net/th?id=OIP.8WbT1nRHgbUH1_BgndaedwHaD5&pid=Api&P=0&h=180" title="Zumba for beginners" link="https://www.youtube.com/watch?v=7X8eftN2mv0&list=PL3-QAt5Lrsg4drlxMT3Eqskc2vu4Us35L" name="Explore"/></span>
        <span><Weightcard imagesrc="https://drhenry.org/wp-content/uploads/2021/03/zumba-pros-cons-and-how-it-works_605d90308d9d7.jpeg" title="Zumba for advanced" link="https://www.youtube.com/watch?v=_PFpsfRNBP4&list=PLXscGRwensC9iIScWhsgeMsM-5OcKoa_X" name="Explore"/></span>
        
        
    </div>

</>
    );
}

export default Zumba;