import React from "react";
import ForDate from "./ForDate";

export default function WeatherData(props) {
  console.log(props.city);
  return (
    <div className="row">
      <div className="col-6">
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
      <div className="col-6">
        <div className="clearfix">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="left image"
          />
          <strong className="left">{props.data.temperature}</strong>{" "}
          <span className="left cels">Cº</span>
        </div>
      </div>
    </div>
  );
}
