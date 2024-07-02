import React from "react";
import './Diettracker.css';
import { useState, useRef } from "react";


function Diettracker(){

//Declaring usRef
const cal=useRef('');
const dailycal=useRef('');
const [data,setData]=useState('');
const [res, newRes]=useState('');
const [highCalorieFoods, setHighCalorieFoods] = useState([]);

let resarr=new Set();

const addall=()=>{
    let calorieSum = 0;
    let proteinSum = 0;

    let daily=parseFloat(dailycal.current.value);

    let foodarr=[];//array to store food
    let calarr=[]; //array to store calories

    foodItems.forEach(item => {
        let calories = parseFloat(item.calorie);
        let protein = parseFloat(item.protein);
      
           foodarr.push(item.food);
           calarr.push(item.calorie);

        if (!isNaN(calories)) {
            calorieSum += calories;
        }

        if (!isNaN(protein)) {
            proteinSum += protein;
        }
  
  let max=[];
  for(let i=0;i<calarr.length;i++){  //inserting the calories above 800 in max array
    if(calarr[i]>600){
        max.push(calarr.indexOf(calarr[i]));
    }
  }

  for(let i=0;i<max.length;i++){
  resarr.add(foodarr[max[i]]);

  }
console.log(resarr);
setHighCalorieFoods(Array.from(resarr));

  });


   if((daily-calorieSum)>0){
      setData(`You had a calorie deficit of ${(daily-calorieSum)} calories`);
   }
   else if((daily-calorieSum)<0){
    setData(`You had a surplus of ${(Math.abs(daily-calorieSum))} calories`);
   }
   else{
    setData(`You had a maintenance calorie`);
   }


   newRes(`${proteinSum}g`);


}



// State to manage food items
const [foodItems, setFoodItems] = useState([{ food: "", calorie: "", protein:"" }]);

// Function to add a new row
const addRow = () => {
    setFoodItems([...foodItems, { food: "", calorie: "", protein:"" }]);
};

// Function to remove a row
const removeRow = (index) => {
    const newFoodItems = foodItems.filter((item, i) => i !== index);
    setFoodItems(newFoodItems);
};

// Function to handle input change
const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFoodItems = [...foodItems];
    newFoodItems[index][name] = value;
    setFoodItems(newFoodItems);

    if (name === "food") {
        fetchNutrition(index, value);
    }

};

//function to fetch nutrition data from api
const fetchNutrition = (index, query) => {
    fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'kJi7AMmNG4NJG4rOe2WCs6RVoFFdstpSjtSAUwLQ' },
        contentType: 'application/json'
    })
    .then(response =>{return response.json()})
    .then(data => {
        if (data.length > 0) {
            console.log(data);
            const newFoodItems = [...foodItems];
            newFoodItems[index].calorie = data[0].calories.toString();
            newFoodItems[index].protein = data[0].protein_g.toString();
            setFoodItems(newFoodItems);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

const clear=()=>{
    window.location.reload();
}


return (
        <>
<div class='nav_bar' >
<div className='title_bar'><p className="title_fitapp"><i>FitHub</i></p></div>
</div>
<div>Highcalorie food (food to avoid)</div>
<div>
        {highCalorieFoods.length > 0 ? (
          <ul>
            {highCalorieFoods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        ) : (
          <p id='errorfound'>No high-calorie foods found!</p>
        )}
      </div>

<div className="diet_summary">
    <div className="summary_txt"><h3>Summary</h3></div>
    <div className="summary_rem"><span id="cal_remaining">Calorie remaining</span><span id="rem_txt"><input id="remcal" value={data} type="text" placeholder="Calorie remaining will be displayed"/></span></div>
    <div className="summary_tot"><span id="protein_total">Total protein</span><span id="tot_txt"><input id="sumtot" value={res} type="text" placeholder="Total protein intake will be displayed"/></span></div>
</div>

<div className="diet_table">
                <table>
                    <thead>
                        <tr>
                            <th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        name="food"
                                        value={item.food}
                                        onChange={(e) => handleInputChange(index, e)}
                                        placeholder="Enter food"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="calorie"
                                        ref={cal}
                                        value={item.calorie}
                                        onChange={(e) => handleInputChange(index, e)}
                                        placeholder="Enter calories"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="protein"
                                        value={item.protein}
                                        onChange={(e) => handleInputChange(index, e)}
                                        placeholder="Enter protein intake"
                                        readonly
                                    />
                                </td>
                                <td>
                                    <button id="btnremove" onClick={() => removeRow(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button id="btnadd" onClick={addRow}>Add Row</button>
            </div>
         
            <div className="userInput">
            <div className="summary_request"><span id="cal_request">Calorie Intake</span><span id="req_cal"><input id="reqcal" ref={dailycal} type="text" placeholder="Enter your daily calorie requirment"/></span></div>
            <div className="btngrp"><span id="findbtn"><button id="btnfind" onClick={addall}>Find</button></span><span id="resetbtn"><button id="btnreset" onClick={clear}>Reset</button></span></div>
            </div>
        </>
    )
}


export default Diettracker;