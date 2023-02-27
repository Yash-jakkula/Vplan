import React from "react"
import Vplan, { change } from "./Vplan.js"
export default function About(){
    function homePage(){
        change();
    }
    return(
        <div id="about-section" style={{display:"none"}}>
            <div className="About-content">
                <div className="AboutCard">
                    <div>
                <img className="vlogo" src="Vplan-logo.jpg" alt="logo"/>
                    </div>
                    <div>
                        <h2>An user friendly website</h2>
                    </div>
                    <div>
                        <p>
                            Hii this is Yashwanth Founder of Vplan <br />
                            it is a website where u can travel without hardwork <br />
                            but with the smart work.Vplan makes Your work easier to travel <br />
                            it provides you the route map,Suggests Stay Hotels in your way<br />
                            Also gives some recomendations to visit palces nearer to your location <br />
                        </p>
                        <h2>It is a Guide for Us to Make Our Trips</h2>

                        <h1>website is under Developement Process..</h1>
                        <button onClick={homePage} id="back">GO back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}