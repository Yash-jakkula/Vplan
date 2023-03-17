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
  
const [weatherData,setWeatherData]=React.useState(null)
 
  return (
    <div className="App">
      <div id='travel-component'>
      <Travel  weatherData={weatherData} />
      </div>
       <About />
        <Home setWeatherData={setWeatherData}/>
        <div id="card-wrap" className='LowerContent'>
        {CardDetails}
        </div>
    </div>
  );
}

export default App;
