import { useState,useEffect } from 'react';
import './App.css';
import DisplayWeather from './DisplayWeather';
import Searchform from './searchform';
import searchform from './searchform';

function App() {
  const key='gMPX1smQKRS18O60GFjexssclAiaopPT'
  const [cityname,setCity]=useState('karachi');
  const [cityData,setCityData]=useState();
  const [id,setId]=useState('');
  const [search,setSearch]=useState('karachi')
  const [weatherData,setWeatherData]=useState();
  // setId(cityData.Key)
  // console.log(weatherData)
  useEffect(() => {
    
    const baseURL="http://dataservice.accuweather.com/currentconditions/v1/"
    const query=`261158?apikey=${key}`

    const weatherDetails=async()=>{
      
      const res= await fetch(baseURL + query).catch(e=>console.log(e))
      const data = await res.json()

      setWeatherData(data[0])
    
    }
    weatherDetails()
  },[]);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(position=>{
    //   console.log(position.coords.latitude)
    //   console.log(position.coords.longitude)

    // })
    const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search"

    const query=`?apikey=${key}&q=${search}`


    const CityDetails= async ()=>{
    
      const fetchData=await fetch(baseURL+query).catch(err=>console.log(err));
      const result= await fetchData.json()
      // setCityData([ ])
      setCityData(result[0])

      // console.log(cityData)

      // console.log(result[0])
    }

    CityDetails()
    
    // console.log(cityData)
    // setKey(cityData.Key)
    // console.log(keys)  
    

  },[search]);
  // const getWeatherDetails= async (id)=>{
    
  // }

  //   const cityDetails= async (city)=>{

   
  //   }
  // console.log(cityData.Key)

    return(
      <>
        <Searchform cityname={cityname} setCity={setCity} setSearch={setSearch}/>

      {
        (typeof(cityData) !== 'undefined') ?
          <DisplayWeather cityData={cityData} weatherData={weatherData} setId={setId}/>
        : console.log('Undefined')
      }
        {/* {cityData.map(data=>)} */}
      </>
    )


  }


export default App;
