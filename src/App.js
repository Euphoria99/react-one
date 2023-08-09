import './App.css';

import { useState } from "react";

function App() {

  const [showText, setShowText] = useState(false);

  const toggleText = () =>{
    setShowText(!showText)
  }
  return (
  <div className='App'>
    <button onClick={toggleText}>Show/Hide</button>
    { showText  && <h1>Hi my name is Pavan</h1>}
  </div>
  );
}



export default App;
