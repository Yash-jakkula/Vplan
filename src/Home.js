import React from "react"
import Vplan, { change, travels } from "./Vplan.js"
import TravelPlan from "./travelPlan.js"
export default function Home(){
    function myComponent(){
        change();
    }

    function travelplaces(){
        travels();
        console.log("working!")
    }

    const [travelData,setTravelPlace]=React.useState({
        source:"",
        destination:""
    });

    function plan(event){
        const {name,value}=event.target;
    setTravelPlace(
       prevPlaceDetails => ({...prevPlaceDetails,[name]:value }))
    }

    let details=(travelData)=>{
        return (
            <TravelPlan travelData={travelData} />
        )
    }

    return (
        <div>

            <div>
                {details}
            </div>
       
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
                        value={travelData.source}
                        onChange={plan}
                        />
                        </div>
                        <div>
                        <input 
                        id="destination" 
                        type="text" 
                        placeholder="To"
                        name="destination" 
                        value={travelData.destination}
                        onChange={plan}
                        />
                        </div>
                        <div>
                        <button onClick={travelplaces}>Plan</button>
                        </div>
                </div>
            </div>
            <h2>Most Visited Places In India</h2>
            </div>
            </div>
    )
}