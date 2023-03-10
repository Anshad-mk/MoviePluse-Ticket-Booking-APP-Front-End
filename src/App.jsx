import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/User/Home'
import LoginPage from './Pages/Admin/LoginPage';
import Modal from './Components/User/Modal';


function App() {
 
  return (
    
  
     <Router>
        <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/admin" element={<LoginPage />}>
            </Route>
            
                     
        </Routes>
    </Router>

   
    
      
   
  )
}

export default App
