import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ForDate from "./ForDate";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function getResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      city: response.data.main.name,
      time: new Date(response.data.dt * 1000),
      speed: response.data.main.feels_like,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
    });
    console.log(response.data);
    console.log(weather.humidity);
    console.log(response.data.dt * 1000);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>{props.city}</h1>
            <ul>
              <li>
                <ForDate date={weather.time} />, {weather.description}
              </li>
              <li>
                Humidity:{weather.humidity}%, Wind: {weather.wind}Km/H
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weather.icon}
                alt={weather.description}
                className="left image"
              />
              <strong className="left">{weather.temperature}</strong>{" "}
              <span className="left cels">Cº</span>
            </div>
          </div>
          <hr />

          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholde="Type a city"
                  className="form-control"
                  autoFocus="on"
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
      </div>
    );
  } else {
    let apiKey = `5d480a9ea4973e7dfcb6ca4444c1582f`;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
    return "Loading";
  }
}
