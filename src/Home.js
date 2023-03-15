import React from "react"
import Vplan, { change, travels } from "./Vplan.js"
import Travel from "./travelPlan.js";
export default function Home(){
   
const [weatherData,setWeatherData]=React.useState({});

    function travelplaces(){
        let destinationValue=document.getElementById("destination").value
       tempData(destinationValue);
        travels();
    }

    const tempData=async (city) => {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6439c721c4mshacfa680acaa10e8p154ee2jsn59535e836448',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
          }
        };
      
        const weatherObj=await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        const weatherData=await weatherObj.json();
        setWeatherData(weatherData);
      }


      function myComponent(){
        change();
    }

    return (
        

            /* <div  id="travel-component" style={{display:"none"}}>
                {details}
            </div> */
       
    <div id="Home" className="Home">

        <nav>
            <div className="Nav-content">
                <img className="logo" src="./Vplan-logo.jpg" alt="vpaln-logo"></img>
            </div>
            <div className="info-wrap">
                <a id='about' onClick={myComponent} href="#">About</a>
                <a href="#">Contact Us</a>
            </div>
        </nav>

            <div className="upperContainer">
                <div className="upContent">
                    <div>
                        <input 
                        id="source" 
                        type="text" 
                        placeholder="From" 
                        name="source"
                        // value={travelData.source}
                        // onChange={plan}
                        />
                        </div>
                        <div>
                        <input 
                        id="destination" 
                        type="text" 
                        placeholder="To"
                        name="destination" 
                        // value={travelData.destination}
                        // onChange={plan}
                        />
                        </div>
                        <div>
                     <button onClick={travelplaces} className="btn plan">Plan</button>
                        </div>
                </div>
            </div>
            <h2>Most Visited Places In India</h2>
            <div className='travelDetails'>
                {weatherData && <Travel weatherData={weatherData} />}
            </div>
            </div>
    )
}