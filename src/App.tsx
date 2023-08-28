import './App.css';
import { Person, Country } from './components/Person'

function App() {

  //defining a function
  const getAge = (name: string): number => {
    return 24
  }
  return (
    <div className="App">
      <div className='App'>
        <Person
          name="Pavan"
          email="pavan@gmail.com"
          age={25}
          isMarried={true}
          friends={["woe", "juanita", "savannah"]}
          country={Country.India}
        />
      </div>
    </div>
  );
}

export default App;
