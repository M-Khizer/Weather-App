import { useState,useEffect } from 'react';
import './App.css';
import DisplayWeather from './displayweather';
import Searchform from './searchform';

function App() {
  
  const [keys,setKeys]=useState('ATTQbEtKYLFkdQJ1PBBSxzJFqHmWKhaH')
  const [cityname,setCity]=useState('karachi');
  const [cityData,setCityData]=useState();
  const [search,setSearch]=useState('karachi')
  const [id,setId]=useState('');

  // setId(cityData?.Key)
  useEffect(() => {
  
    const baseURL="http://dataservice.accuweather.com/locations/v1/cities/search"

    const query=`?apikey=${keys}&q=${search}`

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
        <DisplayWeather cityData={cityData} keys={keys} setId={setId} id={id}/>)
        : <p>City not found</p>
      }
     

      </>
    )


  }


export default App;
