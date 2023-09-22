import logo from "./logo.svg";
import "./App.css";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Weather />

      <Router>
        <div className="App"></div>
      </Router>
    </div>
  );
}

export default App;
