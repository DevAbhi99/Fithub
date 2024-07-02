import React from 'react';
import './App.css';
import Landing from './Components/Landing';
import Waterintake from './Components/Waterintake';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Caloriecalc from './Components/Caloriecalc';
import Diettracker from './Components/Diettracker';
import WeightTraining from './Components/WeightTraining';
import Zumba from './Components/Zumba';
import Martialarts from './Components/Martialarts';


function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/waterintake" element={<Waterintake />} />
          <Route path="/caloriereq" element={<Caloriecalc />} />
          <Route path="/diettracker" element={<Diettracker />} />
          <Route path="/weighttraining" element={<WeightTraining/>}/>
          <Route path="/zumba" element={<Zumba/>}/>
          <Route path="/martialarts" element={<Martialarts/>}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;