import React from "react";
import './Caloriecalc.css';
import {useRef,useState} from 'react';



function Caloriecalc(){

const activities=['sedentary lifestyle', 'light exercise 1 to 3 times a week', 'moderate exercise 3 to 4 times a week', 'active exercise 5 to 6 times a week'];

//useRef declarations
const age=useRef('');
const feet=useRef('');
const inch=useRef('');
const kg=useRef('');

//useState declarations
const [gender, setGender]=useState('');
const [activity, setactivity]=useState('');
const [result, setResult]=useState('');


const clear=()=>{
    window.location.reload();
}

const calcalc=()=>{

let a=parseFloat(age.current.value);

let h=(parseFloat(feet.current.value+'.'+inch.current.value))*30.48;

let w=parseFloat(kg.current.value);

let str='Your daily calorie intake is '


if(gender==='male'){
    
    if(activity==='sedentary lifestyle'){
    setResult(str+((10*w)+(6.25*h)-(5*a)+5));
    }
    else if(activity==='light exercise 1 to 3 times a week'){
        setResult(str+((10*w)+(6.25*h)-(5*a)+5+300));
        }
    else if(activity==='moderate exercise 3 to 4 times a week'){
            setResult(str+((10*w)+(6.25*h)-(5*a)+5+700));
            }
            else if(activity==='active exercise 5 to 6 times a week'){
                setResult(str+((10*w)+(6.25*h)-(5*a)+5+1500));
                }
                else{
                    setResult('Please choose an activity');
                }
}
else if(gender==='female'){
    if(activity==='sedentary lifestyle'){
        setResult(str+((10*w)+(6.25*h)-(5*a)-161));
        }
        else if(activity==='light exercise 1 to 3 times a week'){
            setResult(str+((10*w)+(6.25*h)-(5*a)-161+300));
            }
        else if(activity==='moderate exercise 3 to 4 times a week'){
            setResult(str+((10*w)+(6.25*h)-(5*a)-161+700));
                }
                else if(activity==='active exercise 5 to 6 times a week'){
                    setResult(str+((10*w)+(6.25*h)-(5*a)-161+1500));
                    }
                    else{
                        setResult('Please choose an activity');
                    }
}
else{
    setResult('Please Select a gender or insert correct data');
}



}

    return(

        <>
        <div class='nav_bar' >
<div className='title_bar'><p className="title_fitapp"><i>FitHub</i></p></div>
</div>

<div>
    <p className="calorie_paragagraph">Calorie tracking is a crucial tool for managing and maintaining a healthy lifestyle. By keeping a detailed account of the calories consumed, individuals can gain a clear understanding of their dietary habits and make informed decisions about their nutrition. This practice helps in setting and achieving specific health goals, whether it's losing weight, gaining muscle, or simply maintaining a balanced diet. Tracking calories can also highlight nutritional gaps and excesses, enabling adjustments that ensure a more balanced intake of essential nutrients. Additionally, it fosters mindfulness and accountability, encouraging healthier food choices and portion control. Overall, calorie tracking empowers individuals to take control of their health, contributing to long-term well-being and fitness.</p>
</div> 

<div className="calorie_calc">

<div className="age_field"><span id='calc_txt'>Age</span><span id="age_txt"><input type="text" ref={age}/></span></div>
<div className="gender_field"><span id='calc_txt'>Gender</span><span id="male_rb"><input type="radio" checked={gender === 'male'}  value="male" onChange={(e)=>setGender(e.target.value)}  />Male</span><span id="female_rb"><input type="radio" value="female" checked={gender === 'female'}  onChange={(e)=>setGender(e.target.value)}/>Female</span></div>
<div className="height_field"><span id='calc_txt'>Height</span><span id='infeet'><input type='text' placeholder="Enter height in feet" ref={feet}/></span><span id='ininch'><input type='text' placeholder="Enter height in inches" ref={inch}/></span></div>
<div className="weight_field"><span id='calc_txt'>Weight</span><span id='inkg'><input type='text' placeholder="Enter weight in kg" ref={kg}/></span></div>
<div className="exercise_choice">
    <span id="calc_txt">Pick your workout type</span>
    <span id="workout_type">
        <select id="w_type" onChange={(e)=>setactivity(e.target.value)}>
            {activities.map((e)=>{
                return(
                    <>
                    <option>{e}</option>
                    </>
                )
            })}
        </select>
    </span>
</div>
<div className="btn_field"><span id="calc_btn"><button id="caloriecalc" onClick={calcalc}>Calorie Calculator</button></span><span id="reset_btn"><button id="caloriereset" onClick={clear}>Reset</button></span></div>
<div className="cal_result">{result}</div>
</div>
        
        </>
    )

}

export default Caloriecalc;
