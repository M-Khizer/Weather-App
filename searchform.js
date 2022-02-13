import React, { useEffect, useState } from 'react';
import DisplayWeather from './DisplayWeather';

function Searchform({cityDetails,getWeatherDetails,cityname,setCity,setSearch}) {
    
    const [cityDet,setDet]=useState([]);
    const [weatherDetails,setWeather]=useState([]);
    
    // useEffect(() => {
        
        
    //     };
    
     
    // }, [cityname]);
    
    const handleSubmit= async (e)=>{
        e.preventDefault()
        // console.log(cityname)
        // cityDet = await cityDetails(cityname)
        // weatherDetails= await getWeatherDetails(cityDet.Key)
        // console.log(cityDet)
        // console.log(weatherDetails)
    }

  return(
  <div>
      <form onSubmit={handleSubmit}>
      <label>City Name</label>
      <input type="text" placeholder='eg: karachi' onChange={e=>{setCity(e.target.value)}} value={cityname}/>
      <button onClick={()=>{setSearch(cityname)}}>Enter</button>
      </form>
        {/* {
            weatherDetails.map(data=>(
                <p>{data.WeatherText}</p>
            ))
        } */}
      <DisplayWeather cityDet={cityDet} weatherDetails={weatherDetails} cityname={cityname}/>
  </div>
  )
}

export default Searchform;
