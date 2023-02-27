import React from "react"

export function change(){
    let element =document.getElementById("about");
let aboutSection = document.getElementById("about-section");
let Home = document.getElementById("Home");
let CardWrapper = document.getElementById("card-wrap")
if(aboutSection.style.display === "none"){
    aboutSection.style.display="block"
    Home.style.display="none"
    CardWrapper.style.display="none"
}
else{
    aboutSection.style.display="none"
    Home.style.display="block"
    CardWrapper.style.display="flex"
}
}

export function travels(){
    let travelPage=document.getElementById("travel-component");
    let Home = document.getElementById("Home");
    let CardWrapper = document.getElementById("card-wrap");
    if(travelPage.style.display==="none"){
        travelPage.style.display="block";
        Home.style.display="none";
        CardWrapper.style.display="none";
    }
    else{
        travelPage.style.display="none";
        Home.style.display="flex";
        CardWrapper.style.display="flex";
    }
}
