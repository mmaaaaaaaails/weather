import React from 'react';
import {useEffect, useState} from "react";

const WeatherDisplay = ({zip}) => {

    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        const URL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=9db2a2ab64bd079c904176513dbf938f&units=imperial";
        fetch(URL).then(res => res.json()).then(json => {
            setWeatherData(json);
        });
    }, [zip])

    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0]
    const iconUrl = "https://openweathermap.org/img/w/" + weather.icon + ".png";

    return (
        <div>
            <h1 style={{color: "#fff"}}>
                {weather.main} in {weatherData.name}
                <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p style={{color: "#fff"}}>Current: {((weatherData.main.temp.toFixed(0)-32) * 5 / 9).toFixed(0)}°</p>
            <p style={{color: "#fff"}}>Wind Speed: {weatherData.wind.speed.toFixed(1)} mi/hr</p>
        </div>
    );
};

export default WeatherDisplay;
