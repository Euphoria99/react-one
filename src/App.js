import './App.css';
import Axios from 'axios'
import { useState } from 'react';

function App() {
  

  const [name,setName] = useState("");

  const [age, setAge] = useState({});
  
  const handleChange = (event) => {
    setName(event.target.value);
  }

  const getAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then( (res) => {
      console.log('The Data',res.data)
      setAge(res.data)
      //setAge(res.data.age)
    })
  }



  return (
  <div className='App'>
    <input onChange={handleChange}/>
    <button onClick={getAge}>Predict Age</button>
   <h1> Name: {age.name} </h1>
   <h1> Predicted age : {age.age} </h1>
   <h1> Count: {age.count} </h1>
  </div>
  );
}



export default App;
