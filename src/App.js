import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Card from './Card.js'
import data from './data'
import About from "./About.js"
import TravelPlan from "./travelPlan.js"
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
      {/* <TravelPlan /> */}
        <About />
        <Home />
        <div id="card-wrap" className='LowerContent'>
        {CardDetails}
        </div>
    </div>
  );
}

export default App;
