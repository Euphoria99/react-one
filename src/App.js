import './App.css';
import { useCount } from "./useCount";


function App() {

  const {count, increase, decrease, reset} = useCount();
  return (
  <div className='App'>
    {count}
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
  </div>
  );
}



export default App;
