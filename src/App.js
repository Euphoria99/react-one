import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Contact } from "./pages/Contact"
import { Navbar } from "./Navbar"
import { ChangeProfile } from "./pages/ChangeProfile"
import { Profile } from "./pages/Profile"
import { useState , createContext } from "react";
import { Form } from "./Forms"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }});
  //removing the object or setting the flag to true will trigger a fetch for new data.

  return (
  <div className='App'>
    {/* <QueryClientProvider client={client}>
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1> PAGE NOT FOUND</h1>}/>
      </Routes>
    </Router>
    </QueryClientProvider> */}
    <Form />
  </div>
  );
}



export default App;
