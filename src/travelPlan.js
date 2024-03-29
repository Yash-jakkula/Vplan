import React from "react";
import { travels } from "./Vplan.js"

export default function Travel(props){
    const sunrise = new Date(props.weatherData.sunrise * 1000).toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'});
    const sunset = new Date(props.weatherData.sunset * 1000).toLocaleTimeString('en-IN', {timeZone: 'Asia/Kolkata'});
   function travelPlaces(){
    travels();
   }

    return(
        <div className="travelDetails">

            <div className="sideBar">

            <div className="Booking">
                <h1>{props.destinationName}</h1>
               <h4 id="bookYourStay">Book your Stay</h4>
            </div>

            <div className="Booking">
                <h4 id="BookVechile">Book vechile</h4>
            </div>
            
            <div className="Booking">
                <h4 id="SuggestedPlaces">Suggested places</h4>
            </div>


            </div>

        <div  id="travel-component">


            <div className="s-d-container">
                <div className="source-div">
                <h2 id="source-place"></h2>
                </div>
                <div className="To">
                <h3 className="to">TO</h3>
                </div>
                <div className="destination-div">
                <h2 id="destination-place"></h2> 
                </div>
            </div>

            <div className="content-container">

            <div className="Map-route">
            <a href="https://www.google.com/maps/dir/Hyderabad,+Telangana/Warangal,+Telangana/@17.6747985,78.7346424,10z/data=!4m13!4m12!1m5!1m1!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!2m2!1d78.486671!2d17.385044!1m5!1m1!1s0x3a33450bd75e4be7:0x9306909c277bc137!2m2!1d79.5940544!2d17.9689008">
            <img className="map-img" src="./hyd-warangal.jpg" alt="map-iamge"/>
                </a>
            </div>

            </div>
            <button onClick={travelPlaces} className="btn back-btn">Back</button>

        </div>

        <div>
        <div className="weather-content">
        <div className="weather-img-div">
       
          
            <div className="degree"><span>{props.weatherData && props.weatherData.temp}&#8451;</span></div>
        </div>
        
        <div className="weather-report-content">

            <h4>humidity: {props.weatherData && props.weatherData.humidity}</h4>
           
           <h4>max-temp: {props.weatherData && props.weatherData.max_temp}<span>&#8451;</span></h4>
           
           <h4>min_temp:  {props.weatherData && props.weatherData.min_temp}<span>&#8451;</span></h4>
           
           <h4>Sunrise: {props.weatherData && sunrise}</h4>

           <h4>Sunset: {props.weatherData && sunset}</h4>
           
        </div>

    </div>
        </div>
         
        </div>
    )
}