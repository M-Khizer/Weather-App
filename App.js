import { useState,useEffect } from 'react';
import './App.css';
import DisplayWeather from './DisplayWeather';
import Searchform from './searchform';
import searchform from './searchform';

function App() {
  const key='gMPX1smQKRS18O60GFjexssclAiaopPT'
  const [cityname,setCity]=useState('karachi');
  const [cityData,setCityData]=useState();
  
  const [search,setSearch]=useState('karachi')

  // console.log(cityData)
  // useEffect(() => {
    
  //   const baseURL="http://dataservice.accuweather.com/currentconditions/v1/"
  //   const query=`${id}?apikey=${key}`

  //   const res= await fetch(baseURL + query)
  //   const data = await res.json()

  //   return data[0]
    
  // });

  useEffect(() => {
    
    const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search"

    const query=`?apikey=${key}&q=${search}`

    
    const CityDetails= async ()=>{
      const fetchData=await fetch(baseURL+query);
      const result= await fetchData.json()
      // setCityData([ ])
      setCityData(result[0])

      // console.log(cityData)

      // console.log(result[0])
    }
    CityDetails()
    
    // console.log(cityData)


  },[search]);
  
  
  // const getWeatherDetails= async (id)=>{
    
  // }

  //   const cityDetails= async (city)=>{

   
  //   }

    return(
      <>
        <Searchform cityname={cityname} setCity={setCity} setSearch={setSearch}/>
        <DisplayWeather cityData={cityData}/>
      </>
    )

  }


export default App;
