import React from "react"
export default function Card(props){
    return(
            <div id="Card" className="card">
            <div className="card-component">
            <div className="card-img">
                <img className="PlaceImg" src={`${props.place.imageUrl}`} alt="placeImage"/>
            </div>
            <div className="place-info">

            <span>{props.place.title}</span>

            <div className="map-wrapper">
                    <div>
                <span>Location:{props.place.location}</span>
                    </div>
                    <div>
                <a href={`${props.place.googleMapsUrl}`}>mapUrl</a>
                    </div>             
            </div>

        <p>{props.place.description}</p>  
    </div>
     </div>
     </div>



    )
}