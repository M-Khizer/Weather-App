 import React, { useState } from 'react';

function DisplayWeather({cityData,weatherData,setId}) {
 
  console.log(weatherData)

  console.log(cityData)
  // setId(cityData.Key)
  return(
  <div>
    <p>{cityData?.Country.EnglishName}</p>
    <p>{cityData?.Key}</p>

   <p>{weatherData?.Temperature.Metric.Value} &deg;c</p>

  </div>
  )
}

export default DisplayWeather;
