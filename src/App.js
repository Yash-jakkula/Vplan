import React from 'react';
import './App.css';
import Home from './Home.js'
import Card from './Card.js'
import data from './data'
import About from "./About.js"
import Travel from './travelPlan';
let CardDetails = data.map((place)=>{
  return(
    <Card 
    place={place}
    />
  )
})





function App() {
 
  return (
    <div className="App">
      <div id='travel-component'>
      <Travel />
      </div>
       <About />
        <Home />
        <div id="card-wrap" className='LowerContent'>
        {CardDetails}
        </div>
    </div>
  );
}

export default App;
