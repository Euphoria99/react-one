import './App.css';
import Axios from 'axios'
import { useState } from 'react';

function App() {
  

const [ genExcuse, setGenExcuse] = useState("");

const fetchExcuse = (excuse) => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then( (res) => {
      console.log('The Data',res.data)
      setGenExcuse(res.data[0].excuse)
    })
}

  return (
  <div className='App'>

    <ul className="zxr">
      <li>  <button onClick={()=> fetchExcuse("party")}> Party</button> </li>
      <li>  <button onClick={()=> fetchExcuse("family")}>Family</button> </li>
      <li>  <button onClick={()=> fetchExcuse("office")}> Office </button> </li>
    </ul>

    <h1> {genExcuse}</h1>
  </div>
  );
}



export default App;
