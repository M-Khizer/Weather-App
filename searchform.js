import React, { useEffect, useState } from 'react';
// import DisplayWeather from './DisplayWeather';

function Searchform({cityDetails,getWeatherDetails,cityname,setCity,setSearch}) {
    
    const handleSubmit= async (e)=>{
        e.preventDefault()
        setSearch(cityname)
        // console.log(cityname)
    }

  return(
  <div>
      <form onSubmit={handleSubmit}>
      <label>City Name</label>
      <input type="text" placeholder='eg: karachi' onChange={e=>{setCity(e.target.value)}} value={cityname}/>
      <button>Enter</button>
      </form>
        {/* {
            weatherDetails.map(data=>(
                <p>{data.WeatherText}</p>
            ))
        } */}
  </div>
  )
}

export default Searchform;
