import React, { useEffect, useState } from "react";
import "./seatselect.css";
import FourKIcon from "@mui/icons-material/FourK";
import { useLocation } from "react-router-dom";
import userAxios from "../../../assets/axiosForUser";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Seatselect() {
  const [coulumSeat, setCoulumSeat] = useState([]);
  const [seat, setSeat] = useState([]);
  const { state } = useLocation();
  const [data, setData] = useState(state);
  const [seatcount, setSeatcount] = useState(0);
  const [columCount, setColumncount] = useState(0);
  const [bookedSeats, setBookedSeats] = useState([]);
  const navigate = useNavigate();

//   useEffect(()=>{
//     if(!state)navigate('/')
//   },[state])
  useEffect(() => {
    setData(state);
    userAxios
      .post("/seatusage", {
        date: data?.date,
        time: data?.time,
        screen_id: data?.Screen?.theater?.screen?._id,
      })
      .then((resp) => {
        setBookedSeats(resp?.data?.seats);
        setSeatcount(resp.data?.screenseats?.theater?.screen?.row);
        setColumncount(resp.data?.screenseats?.theater?.screen?.column);
      });
    bookedSeats.map((value) => {
      document.getElementById(value).style.backgroundColor = "gray";
      document.getElementById(value).disabled = true;
    });
  }, [coulumSeat, seat, bookedSeats]);
  
  const token = localStorage.getItem("token");
  function reservation(seat, data) {
    if (selectedSeat.length <= 0) {
      swal({
        title: "Select Seat first!",
        text: "Minimum One Seat!",
        icon: "warning",

        dangerMode: false,
      });
    } else {
      if (!token) {
        swal({
          title: "Log Error",
          text: "you should log in first!",
          icon: "warning",
          dangerMode: false,
        }).then(() => {
          navigate("/login");
        });
      } else {
        userAxios
          .post(
            "/seatbook",
            {
              BookingDate: new Date(),
              show: {
                date: new Date(data.date),
                time: data?.time,
                SeatNumber: seat,
                price: data?.Screen?.TicketPrice,
                TotelPrice: seat.length * data?.Screen?.TicketPrice,
              },
              movie: data?.Screen?.Movie,
              theater: data?.Screen?.theater,
            }
          )
          .then((resp) => {
            swal({
              title: "success",
              text: `${seat} Selected`,
              icon: "success",
              dangerMode: false,
            }).then(() => {
              navigate("/Checkout", {
                state: {
                  seat,
                  Bookingid:resp.data._id,
                  totelprice: seat.length * data?.Screen?.TicketPrice,
                  movie: data?.Screen?.Movie,
                  theater: data?.Screen?.theater,
                  date: new Date(data?.date),
                  time: data?.time,
                  price: data?.Screen?.TicketPrice,
                },
              });
            });
          });
      }
    }
  }

  for (let i = 0; i < seatcount; i++) {
    seat[i] = i;
  }
  for (let j = 0; j < columCount; j++) {
    coulumSeat[j] = String.fromCharCode(65 + j);
  }
  const [selectedSeat, setSelectedSeat] = useState([]);
  const Seatselect = (event) => {
    if (event.currentTarget.style.backgroundColor === "red") {
      event.currentTarget.style.backgroundColor = "white";
    } else {
      event.currentTarget.style.backgroundColor = "red";
    }
    if (!selectedSeat.includes(event.target.value)) {
      setSelectedSeat([...selectedSeat, event.target.value]);
    } else {
      setSelectedSeat(selectedSeat.filter((val) => val !== event.target.value));
    }
  };

  return (
    <div className="Main-container">
        <div className="h-24 bg-[#e4dede]">

        </div>
      <div className="mainMid-container">
        <div className="Mid-container">
          <div className="seat-container">
            {coulumSeat.map((value, index) => {
              return (
                <div className="column-countainer" key={value}>
                  {seat.map((data, index) => {
                    return (
                      <button
                        className="Seat text-gray-300"
                        value={value + index}
                        id={value + index}
                        key={value + index}
                        onClick={(event) => {
                          Seatselect(event);
                        }}
                      >
                        {value}
                        {data}
                      </button>
                    );
                  })}
                </div>
              );
            })}
            <div className="Screen-container">
              <FourKIcon sx={{ fontSize: 60 }} />
              Screen
              <div className="theater"></div>
            </div>
          </div>
          <div className="mr-10 detiales-container border-2 text-white text-center">
            <div>
              <h1 className="text-white ">
                <span className="text-[#29fadede] text-3xl ">
                  {data?.Screen?.Movie?.moviename} -{" "}
                  {data?.Screen?.Movie?.language}
                </span>{" "}
              </h1>
              <hr />
            </div>
            <h1 className="mt-2 text-red-500">
              {data?.Screen?.theater?.screen?.name}
            </h1>
            <h1 className="mt-4">
              {data?.date.toLocaleDateString()} - {data?.time}
            </h1>
            <h1 className="mt-3">Selected Seats</h1>
            <h1 className="mt-3">{`${selectedSeat}`}</h1>
            {selectedSeat.length > 0 ? (
              <h2 className="mt-3 mb-3">
                {data?.Screen?.TicketPrice} * {selectedSeat.length} ={" "}
                {selectedSeat.length * data?.Screen?.TicketPrice}
              </h2>
            ) : null}
            <button
              onClick={() => {
                reservation(selectedSeat, data);
              }}
              className="bg-[#ffff] text-black px-2 rounded-lg hover:bg-[#b48d8d]"
            >
              Book Your Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seatselect;
