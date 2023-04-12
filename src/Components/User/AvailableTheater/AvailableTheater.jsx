import React, { useEffect, useState } from 'react'
import './availabletheater.css'
import { useNavigate } from 'react-router-dom';

const AvailableTheater = (props) => {
    const navigate = useNavigate();
  const [show, setShow] = useState([]);
  const [currentDate, setCurrentDate] = useState(props.date);
  const Seatselection = (date,time,Screen)=>{

navigate('/movieseat', { state: { date,time,Screen} });

  }

  useEffect(() => {
    setShow(props.data);
    setCurrentDate(props.date);
  }, [props.data, props.date]);

  return (
    <div className='Main-Container w-f m-0 p-3'>
      <div className='active-fill'>
        <p className='status-indicaters'>Available</p>
        <p className='status-indicaters'>Fast Filling</p>
        <p className='status-indicaters'>Subtitle</p>
      </div>
      {Array.isArray(show) &&
        show.map((item, index) => {
          const startDate = new Date(item.startDate);
          const endDate = new Date(item.EndDate);
          if (currentDate >= startDate && currentDate <= endDate) {
            return (
              <React.Fragment key={index}>
                <hr className='pt-3 ' />
                <div className='Theater-container'>
                  <div className='theater-Name-container '>
                    <h5 className='pe-3 m-0'>{item.theater.name}</h5>
                    <p className=' mx-2'>{item.theater.screen.name}</p>
                  </div>
                  <div className='Time-button'>
                    {item.ShowTimes.map((value, index) => (
                      
                        <button onClick={()=>{
                            Seatselection(currentDate,value,item)
                            window.location.reload();
                        }} key={index} className='btn bg-black text-white rounded-lg px-4 mx-1'>
                          {value} 
                        </button>
                      
                    ))}
                  </div>
                </div>
              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default AvailableTheater;
