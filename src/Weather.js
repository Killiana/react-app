import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });
  function getResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,

      time: new Date(response.data.dt * 1000),

      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = `5d480a9ea4973e7dfcb6ca4444c1582f`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCity(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <WeatherData data={weather} />

        <hr />

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholde="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={getCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
