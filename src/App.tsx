import './App.css';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import { Login } from "./pages/login"
import { Home } from "./pages/home"
import { Contact } from "./pages/contact"
import { Provider } from "react-redux";
import { store } from "./store"

function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
