import './App.css';

function App() {

  return (
    <div className="App">
          <User name='pavan' age={24} email="pavan@gmail.com" />
          <User name='alice' age={25} email="alice@gmail.com"/>
    </div>
  );
}


// defining a user component
const User = (props) => {

  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}
export default App;
