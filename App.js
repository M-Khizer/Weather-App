import { useState,useEffect } from 'react';
import './App.css';
import DisplayWeather from './displayweather';
import Searchform from './searchform';
// import searchform from './searchform';

function App() {
  const key='BDlk68JVkVkyp0j9GxAQyG8sviskZ2VZ'
  const [cityname,setCity]=useState('karachi');
  const [cityData,setCityData]=useState();
  const [id,setId]=useState('');
  const [search,setSearch]=useState('karachi')
  const [weatherData,setWeatherData]=useState();
  
  // setId(cityData?.Key)
  // console.log(id)
  // 261158

  useEffect(() => {
    
    const baseURL="http://dataservice.accuweather.com/currentconditions/v1/"
    const query=`261158?apikey=${key}`
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
  },[]);

  useEffect(() => {
  
    const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search"

    const query=`?apikey=${key}&q=${search}`

    const controller= new AbortController()
    const signal=controller.signal

    const CityDetails= async ()=>{
    
      const fetchData=await fetch(baseURL+query,{
        signal:signal
      }).catch(e=>{
        
        if(e.name === 'AbortError'){
          console.log('Abort success')
        }
        else{
          console.log(e)
        }
      });
      const result= await fetchData.json()
      console.log(fetchData)
      console.log(result)

      setCityData(result[0])

      return ()=>{
        controller.abort()
      }
    }

    CityDetails()

  },[search]);

  return(
      <>
        <Searchform cityname={cityname} setCity={setCity} setSearch={setSearch}/>

      {
        typeof(cityData) !== "undefined" ? (
        <DisplayWeather cityData={cityData} weatherData={weatherData} setId={setId}/>)
        : <p>Loading...</p>
      }
      </>
    )


  }


export default App;
