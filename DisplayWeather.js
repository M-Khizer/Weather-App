import React, { useState,useEffect } from 'react';
import clear from "./Weather Icons/clear.svg";
import cloud from "./Weather Icons/cloud.svg";
import snow from "./Weather Icons/snow.svg";
import haze from "./Weather Icons/haze.svg";
import storm from "./Weather Icons/storm.svg";
import rain from "./Weather Icons/rain.svg";

function DisplayWeather({cityData,keys,setId,id}) {

  const [weatherData,setWeatherData]=useState();

  useEffect(() => {
    setId(cityData.Key)
  }, [cityData.EnglishName])
  
  useEffect(() => {

    const baseURL="http://dataservice.accuweather.com/currentconditions/v1/"
    const query=`${id}?apikey=${keys}`

    const controller= new AbortController()
    const signal=controller.signal

    const weatherDetails= async ()=>{
      
      
      const res= await fetch(baseURL+query,{
        signal:signal
      }).catch(e=>{
        if(e.name === 'AbortError'){
          console.log('Abort success')
        }
        else{
          console.log(e)
        }
      })
      
      const data = await res.json()
      setWeatherData(data[0])
      // console.log(weatherData)

      return ()=>{
        controller.abort()
      }
    }
    weatherDetails()
  },[id]);

  return(
  <div>
    
    
    <p>{cityData?.Country.EnglishName}</p>
    <p>{cityData?.Key}</p>

   <p>{weatherData?.Temperature.Metric.Value} &deg;c</p>
   <p>{weatherData?.WeatherText}</p>

  </div>
  )
}

export default DisplayWeather;
