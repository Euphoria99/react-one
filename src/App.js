import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Contact } from "./pages/Contact"
import { Navbar } from "./Navbar"
import { ChangeProfile } from "./pages/ChangeProfile"
import { Profile } from "./pages/Profile"
import { useState } from "react";

function App() {

  const [username, setUsername] = useState("Pavan")
  
  return (
  <div className='App'>

    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home username={username}/>} />
        <Route path="/profile" element={<Profile username={username} setUsername={setUsername}/>} />
        {/* <Route path="/menu" element={<Profile username={username} />}/> */}
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>}/>
      </Routes>
    </Router>


  </div>
  );
}



export default App;
