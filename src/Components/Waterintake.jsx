import React from "react";
import './Waterintake.css';
import {useState} from 'react';

function Waterintake(){

    

const [count,setCount]=useState(0);
const [res,setRes]=useState('You need to start with your goal');


const increment = () => {
    if (count < 8) {
      setCount(count + 1);
       if(count>=1&&count<=3){
        setRes('You need to keep up');
       }
       else if(count>=4&&count<=6){
        setRes('keep up the great work');
       }
       else if(count==7){
        setRes('Excellent daily water intake goal completed');
       }

    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      if(count>=1&&count<=3){
        setRes('You need to keep up');
       }
       else if(count>=4&&count<=6){
        setRes('keep up the great work');
       }
       else if(count==7){
        setRes('Excellent daily water intake goal completed');
       }
    }
  };


return(
    <>
<div class='nav_bar' >
<div className='title_bar'><p className="title_fitapp"><i>FitHub</i></p></div>
</div>

<div className="water_info">
    <p id="p1">Drinking water is essential for maintaining optimal bodily functions and overall health. One of the primary advantages is that water plays a crucial role in regulating body temperature, keeping cells hydrated, and facilitating various metabolic processes. Proper hydration helps in maintaining the balance of bodily fluids, which are vital for digestion, absorption, circulation, and transportation of nutrients. Additionally, drinking water aids in kidney function, helping to flush out toxins and waste products through urine. Adequate water intake can prevent the formation of kidney stones and urinary tract infections, promoting a healthier renal system.</p>
<p id="p2">Another significant advantage of drinking water is its positive impact on physical and cognitive performance. Dehydration, even in mild forms, can impair brain function, leading to issues such as mood swings, fatigue, and decreased concentration. Staying well-hydrated ensures that the brain receives sufficient oxygen and nutrients, enhancing cognitive abilities and mental clarity. For those engaging in physical activities, water is crucial in maintaining energy levels and preventing cramps, strains, and injuries. It also helps in reducing muscle fatigue and soreness by keeping tissues and joints well-lubricated. Thus, consistent water consumption is integral not only to physical health but also to mental well-being and overall performance.</p>
</div>
<div className="w_tracker">
    <span><h2 id='water_title'>Daily water intake tracker</h2></span>
    <div className="t_tool">
    <input type="text" id="water_txt" value={count}/>
    <span id='update'><span><button id='water_update' onClick={increment}>+</button></span><span><button id="water_reduce" onClick={decrement}>-</button></span></span>
    </div>
    <div><h3 id="water_res">{res}</h3></div>
</div>
    </>
)

}

export default Waterintake;