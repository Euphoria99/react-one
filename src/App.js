import './App.css';
import { Person } from './Persons'


function App() {

  return (
  <div className='App'>
    <Person 
    name="Pavan"
    email="pavan@gmail.com"
    isMarried={true}
    friends={["woe", "juanita", "savannah"]}
  />
  </div>
  );
}



export default App;
