

export function change(){
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
var destinationValue;
export function travels(){
    let travelPage=document.querySelector('.travelDetails');
    let Home = document.getElementById("Home");
    let CardWrapper = document.getElementById("card-wrap");
    let source=document.getElementById("source-place")
    let destination=document.getElementById("destination-place")
    let sourceValue=document.getElementById("source").value
    destinationValue=document.getElementById("destination").value
    if ( !destinationValue || !sourceValue){
        alert("please enter the source and destination Place!")
    }
    else if(destinationValue===sourceValue){
        alert('source and destination values should not be same!')
    }
    else if (window.getComputedStyle(travelPage).display === "none" && destinationValue && sourceValue){
        travelPage.style.display="grid";
        Home.style.display="none";
        CardWrapper.style.display="none";
        source.innerHTML=sourceValue
        destination.innerHTML=destinationValue
    }
    else{
        travelPage.style.display="none";
        Home.style.display="flex";
        CardWrapper.style.display="flex";
    }
}

 



