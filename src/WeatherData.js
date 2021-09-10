import React from "react";
import ForDate from "./ForDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
  console.log(props.city);
  return (
    <div className="row">
      <div className="col-7">
        <h1>{props.data.city}</h1>

        <ul>
          <li>
            <ForDate date={props.data.time} />, {props.data.description}
          </li>
          <li>
            Humidity:{props.data.humidity}%, Wind: {props.data.wind}Km/H
          </li>
        </ul>
      </div>
      <div className="col-5">
        <div className="clearfix">
          <WeatherIcon
            image={props.data.icon}
            alt={props.data.description}
            className="image left"
          />
          <strong>{props.data.temperature}</strong>{" "}
          <span className="cels">Cº</span>
        </div>
      </div>
    </div>
  );
}
