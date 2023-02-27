import React from "react";
import Vplan, {travels} from "./Vplan.js";
export default function travel(){
   function travelplaces(){
    travels();
   }
    return(
        <div id="travel-component" style={{display:"none"}}>
                <input type="text" placeholder="success" />
                <p>hiii</p>
                <button onClick={travelplaces} id="back">Back</button>
        </div>
    )
}