import React from 'react'
import { useState } from "react";
import axios from "axios";
import './GetWeather.css'

function GetWeather() {
  const [temperature, setTemperature] = useState("");  
 const [city, setCity] = useState("");
    
    const getWeatherData = (city) => {
        axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a17499e18c087c6fefa9ccc1a4938ddf`,
        })
            .then((response) => {
        
                setTemperature(response.data.weather[0].main);
        
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
       <div>
            <h1 className="Heading">Get Weather</h1>            
                <form>
                    <div>
                        <label className="label">Enter City: </label>
                    <input className="text" type="text" value={city}
                        onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div >
                        <button className="btn" type="button"  onClick={() => {
            getWeatherData(city);
          }}>Get Weather</button>
                </div>
                <div className="display">
                    { temperature}
                </div>
            </form>            
            </div>
    )
}

export default GetWeather



