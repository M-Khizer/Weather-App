import React, { useState } from 'react';

function DisplayWeather({cityData,weatherData,setId}) {
  // const [key,setKey]=useState()
  // const [loading,setLoading]=useState(true)
  // setKey(cityData)
  console.log(cityData.Key)
  // setId(cityData.Key)
  console.log(weatherData)
  // setKey(cityData)
  // console.log(key)
//  console.log(cityData.Key)
//  cityData.map(data=>{
//    console.log(data.Key)
//  })
  return(
  <div>
    <p>{cityData.EnglishName}</p>
   <p>{weatherData.WeatherText}</p>
  </div>
  )
}

export default DisplayWeather;
