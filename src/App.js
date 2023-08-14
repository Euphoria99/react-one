import './App.css';
import Axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  
  // fetch("https://catfact.ninja/fact").then(
  //   (res) => res.json()
  // ).then(
  //   (data) => console.log('The Data', data)
  // )

  const [catFact,setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then( (res) => {
      console.log('The Data',res.data)
      setCatFact(res.data.fact)
    })
  }

  useEffect( () => {
    fetchCatFact()
  }, []);


  return (
  <div className='App'>
    <button onClick={fetchCatFact}>Generate a Cat Fact</button>
   <p> {catFact} </p>
  </div>
  );
}



export default App;
