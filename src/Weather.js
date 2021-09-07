import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1>London</h1>
          <ul>
            <li>Friday 12:30, Overcast Clouds</li>
            <li>Humidity:71%, Wind: 4Km/H</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sunny"
              className="left image"
            />
            <strong className="left">18</strong>{" "}
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
}
