import React, { useState } from 'react';

function DisplayWeather({cityData}) {
  const [key,setKey]=useState()

  console.log(cityData)
  // setKey(cityData)
  // console.log(key)
//  console.log(cityData.Key)
//  cityData.map(data=>{
//    console.log(data.Key)
//  })
  return(
  <div>
    {/* {
     cityData.map(city=> <li>{city}</li>)

    } */}
    {/* <h1>{cityData.Key}</h1> */}
  </div>
  )
}

export default DisplayWeather;
