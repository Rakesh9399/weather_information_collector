import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import  './SearchBox.css';
import InfoBox from './InfoBox';
// import { parseAstAsync } from 'vite';


function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");


     const API_URL ="https://api.openweathermap.org/data/2.5/weather";
     const API_KEY = "f9c75793d6d8618a7c430edf5e18b16a";

    let getWeatherinfo = async () =>{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);

       let result ={
        city: city,
        temp:  jsonResponse.main.temp,
        tempMin:  jsonResponse.main.temp_min,
        tempMax:  jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,

       }

       console.log(result)
       return result;
    };




    let handleChange = (e) =>{
        setCity(e.target.value);
    };

    let handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await getWeatherinfo();
       updateInfo(newInfo);
    };


  return (
    <div className='SearchBox'>
        <h3>Search for the weather</h3>
        <form  onSubmit={handleSubmit}>
          <TextField id="city" label="Enter city name " variant='outlined' required
          value={city} 
          onChange={handleChange}
          />
            <br />
            <br />
          <Button variant='contained' type='submit' >
            Search
          </Button>
        </form>

        {/* <InfoBox /> */}

    </div>
  )
}

export default SearchBox
