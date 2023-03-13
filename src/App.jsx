import React ,{ useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import './App.css'
import Home from './Pages/User/Home'
import LoginPage from './Pages/Admin/LoginPage';
import Modal from './Components/User/Modal';
import MenuBar from './Pages/Admin/AdminPannel'
import adminPannel from './Pages/Admin/AdminPannel';
import MoviePage from './Pages/User/MoviePage';
import MovieSeat from './Pages/User/SeatSelector/SeatSelector'
import TheaterSelect from './Pages/User/BookingPage/BookingPage'

function App() {

  const token = localStorage.getItem('Admintoken');
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    setLoggedIn(token);
    
  }, [token]);

 


  return (
    
  
     <Router>




        <Routes>
            <Route path="/" element={<Home />}>
            </Route>

            <Route path={"/admin" } element={<LoginPage />}>  </Route>
            

            <Route path={ "/adminPannel"} element={< MenuBar />}>
            </Route>
            <Route path={"/admin" } element={<LoginPage />}>  </Route>
            <Route path={"/movie" } element={<MoviePage />}>  </Route>
            <Route path={"/movieseat" } element={<MovieSeat />}>  </Route>
            <Route path={"/SelectTheater" } element={<TheaterSelect />}>  </Route>

            {/* {loggedIn ? <Navigate to="/adminPannel" /> : <Navigate to="/admin" />} */}
    

            
            
                     
        </Routes>
    </Router>
   
    
      
   
  )
}

export default App
