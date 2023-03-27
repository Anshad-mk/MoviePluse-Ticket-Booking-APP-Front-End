import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/User/Home";
import LoginPage from "./Pages/Admin/LoginPage";
import MoviePage from "./Pages/User/MoviePage";
import MovieSeat from "./Pages/User/SeatSelector/SeatSelector";
import TheaterSelect from "./Pages/User/BookingPage/BookingPage";
import NavBar from "./Components/User/NavBar";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import FirstDashBoard from "./Pages/Admin/Dashboard/FirstDashBoard";
// movies
import AddMovies from './Pages/Admin/Movies/addmovies'
import Viewmovies from './Pages/Admin/Movies/viewmovies'
// users
import AddUser from './Pages/Admin/Users/addUser'
import Viewusers from './Pages/Admin/Users/viewUser'
//theater
import Addtheater from './Pages/Admin/Theaters/addtheater'
import Viewtheater from './Pages/Admin/Theaters/viewtheater'

function App() {
  const token = localStorage.getItem("Admintoken");
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    setLoggedIn(token);
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<NavBar />}>
          <Route index element={<Home />}/>
          <Route path={"/movie/:id"} element={<MoviePage />}/>
          <Route path={"/movieseat"} element={<MovieSeat />}/>
          <Route path={"/SelectTheater"} element={<TheaterSelect />}/>
        </Route>
        <Route path={"/admin"} element={<LoginPage />}/>

        <Route path={"/adminPannel"} element={<Dashboard />}>
          <Route index element={<FirstDashBoard />}/>
          <Route path={"add-users"} element={<AddUser />}/>
          <Route path={"view-users"} element={<Viewusers />}/>
          <Route path={"add-movies"} element={<AddMovies />}/>
          <Route path={"view-movies"} element={<Viewmovies />}/>
          <Route path={"add-theaters"} element={<Addtheater />} />
          <Route path={"view-theaters"} element={<Viewtheater />} />


        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
