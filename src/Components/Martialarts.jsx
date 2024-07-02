import React from "react";
import Weightcard from "./Weightcard";
import './Martialarts.css';

function Martialarts(){

return(
    <>
        <div class='nav_bar' >
<div className='title_bar'><p className="title_fitapp"><i>FitHub</i></p></div>
</div>
<p id="weight_info"></p>
<p>
Martial arts offer numerous advantages, encompassing physical, mental, and emotional benefits. Physically, they enhance strength, flexibility, coordination, and cardiovascular health through rigorous training routines. Mentally, martial arts promote discipline, focus, and perseverance, as practitioners learn to set and achieve goals. The practice also fosters self-confidence and self-control, empowering individuals to handle stressful situations more effectively. Furthermore, martial arts cultivate a sense of respect and humility, encouraging personal growth and improved social interactions. The holistic approach of martial arts not only sharpens self-defense skills but also contributes to overall well-being and a balanced lifestyle.</p>
    <div className="weight_alignment">
        <span><Weightcard imagesrc="https://img2.storyblok.com/1800x743/filters:focal(null):format(jpeg)/f/115220/2400x990/3a5689f28f/add-some-kick-to-your-workout-with-kickboxing.jpeg" title="Kick Boxing" link="https://www.youtube.com/watch?v=1-EVNlNZiks&list=PL558YxCaD5JvHxMFtnX4f913pgV8-4UVr" name="Explore"/></span>
        <span><Weightcard imagesrc="https://i.ytimg.com/vi/A80C5R3nAUQ/maxresdefault.jpg" title="Taekwondo" link="https://www.youtube.com/watch?v=F1kXuQ3QB-Y&list=PL59sCVifcXA2AT19RR60BLn3XC-mtGtEs" name="Explore"/></span>
        <span><Weightcard imagesrc="https://wkmf.com.br/wp-content/uploads/2021/01/Sem-titulo-1-1-1024x1024.jpg" title="Krava Maga" link="https://www.youtube.com/watch?v=0q6xjTO4kGc&list=PLr5H8cgVDW98kurHdSLK7rgj_pwHxzI2c" name="Explore"/></span>
        
    </div>
    
    </>
)

}


export default Martialarts;