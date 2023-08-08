import './App.css';
import {User} from './User.js'
import {PlanetsCp} from './Planets.js'

function App() {

  const age = 17;

  const isGreen = true;

  const users = [
    { name: "Pavan", age: 24 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
    ];

  
    //assignment
    const planets = [
      { name: "Mars", isGasPlanet: false },
      { name: "Earth", isGasPlanet: false },
      { name: "Jupiter", isGasPlanet: true },
      { name: "Venus", isGasPlanet: false },
      { name: "Neptune", isGasPlanet: true },
      { name: "Uranus", isGasPlanet: true },
      ];


  return (
  
    //ternary operators 
  <div className='App'>
    {age >= 18 ? <h1>OVERAGE</h1> : <h1>UNDERAGE</h1>}
    <h1 style={{color: isGreen ? "green" : "red"}}>THIS HAS COLOR</h1>

    {isGreen && <button>Submit</button>}


    {/* Lists */}
    
    {users.map( (user,key) => {
      return <User name={user.name} age={user.age} />
    })}

    {/* Assignment */}
    
    {
      planets.map( (planet,key) => {
        return <PlanetsCp name={planet.name} isGasPlanet={planet.isGasPlanet} /> 
      })
  
    }

  </div>



  );
}



export default App;
