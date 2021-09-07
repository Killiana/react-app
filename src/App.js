import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <div className="container">
        <footer>
          {" "}
          <a
            href="https://github.com/Killiana/react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open source code{" "}
          </a>
          by Iliyana Boneva{" "}
        </footer>
      </div>
    </div>
  );
}
