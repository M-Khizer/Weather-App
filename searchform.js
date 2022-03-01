import React from 'react';

// import DisplayWeather from './DisplayWeather';

function Searchform({cityname,setCity,setSearch}) {
    
    const handleSubmit= async (e)=>{
        e.preventDefault()
        
        setSearch(cityname)
        // console.log(cityname)
    }

  return(
  <div>
      <form onSubmit={handleSubmit}>
      <label>City Name</label>
      <input type="text" placeholder='eg: karachi' onChange={e=>{setCity(e.target.value)}}
       value={cityname}/>
      {/* <button>Enter</button> */}
      </form>
  </div>
  )
}

export default Searchform;
