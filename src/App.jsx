import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

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
import AddMovies from "./Pages/Admin/Movies/addmovies";
import Viewmovies from "./Pages/Admin/Movies/viewmovies";
// users
import AddUser from "./Pages/Admin/Users/addUser";
import Viewusers from "./Pages/Admin/Users/viewUser";
//theater
import Addtheater from "./Pages/Admin/Theaters/addtheater";
import Viewtheater from "./Pages/Admin/Theaters/viewtheater";
import Login from "./Pages/TheaterOwner/Authentication/login";
import Approvel from "./Pages/TheaterOwner/404/approval";
import CinemasPannel from "./Pages/TheaterOwner/Dashboard/dashboard";
import DashBoard from "./Pages/TheaterOwner/Dashboard/DashboardData";
import Addscreen from "./Pages/TheaterOwner/Screens/addscreen";
import Signup from "./Components/TheaterOwner/Forms/signup";
import ViewScreens from "./Pages/TheaterOwner/Screens/ViewScreens";
import AddShow from "./Pages/TheaterOwner/Screens/addmovies"
import ViewShow from "./Pages/TheaterOwner/Screens/ViewShow"
import Reservation from "./Pages/TheaterOwner/Reservation/Reservations"


function App() {
  const token = localStorage.getItem("Admintoken");
  const [loggedIn, setLoggedIn] = useState(null);
  const usertoken = localStorage.getItem("token")
  const [userloggedIn, setUserLoggedIn] = useState(null);
  const Cinematoken = localStorage.getItem("Cinematoken")
  const [CinemaloggedIn, setCinemaLoggedIn] = useState(null);

 

  useEffect(() => {
    setLoggedIn(token);
    setUserLoggedIn(userloggedIn)
    setCinemaLoggedIn(Cinematoken)

  }, [token,userloggedIn,Cinematoken]);

  return (
    <Router>
      <Routes>
        
        {/* User */}
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path={"/movie/:id"} element={<MoviePage />} />
          <Route path={"/movieseat"} element={<MovieSeat />} />
          <Route path={"/SelectTheater/:MovieId"} element={<TheaterSelect />} />
        </Route>

        {/* Admin */}
        {/* {token ? <Navigate to={"/adminPannel"} /> : <Route path={"/admin"} element={<LoginPage />}/> } */}
        <Route path={"/admin"} element={<LoginPage />}/>
        <Route path={"/adminPannel"} element={<Dashboard/>}>
          <Route index element={<FirstDashBoard />} />
          <Route path={"add-users"} element={<AddUser />} />
          <Route path={"view-users"} element={<Viewusers />} />
          <Route path={"add-movies"} element={<AddMovies />} />
          <Route path={"view-movies"} element={<Viewmovies />} />
          <Route path={"add-theaters"} element={<Addtheater />} />
          <Route path={"view-theaters"} element={<Viewtheater />} />
        </Route>


        {/* Cinemas  */}
        <Route path={"/Cinemas"} element={<Login />} />
        <Route path={"/Cinemas/Signup"} element={<Signup/>}/>
        <Route path={"/approval"} element={<Approvel />} />
        <Route path={"/CinemasPannel"} element={<CinemasPannel />}>
          <Route index element={<DashBoard />} />
          <Route path={"add-screen"} element={<Addscreen />}/>
          <Route path={"view-users"} element={<ViewScreens />}/>
          <Route path={"add-Show"} element={<AddShow />}/>
          <Route path={"view-Show"} element={<ViewShow />}/>
          <Route path={"Reservations"} element={<Reservation />}/>

          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
