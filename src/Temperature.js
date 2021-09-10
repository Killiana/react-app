import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("cels");

  function getFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }
  function getCels(event) {
    event.preventDefault();
    setUnit("cels");
  }
  if (unit === "cels") {
    return (
      <span className="Temperature">
        <strong>{props.celsius}</strong>{" "}
        <span className="cels">
          Cº |
          <a href="/" onClick={getFahr} className="link">
            {" "}
            Fº{" "}
          </a>
        </span>
      </span>
    );
  } else {
    let fahr = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="Temperature">
        <strong>{fahr}</strong>{" "}
        <span className="cels">
          <a href="/" onClick={getCels} className="link">
            {" "}
            Cº
          </a>{" "}
          | Fº{" "}
        </span>
      </span>
    );
  }
}
