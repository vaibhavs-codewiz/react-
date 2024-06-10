import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [customStyle, setCount] = useState("black");
  function bgChange(color) {
    customStyle = {
      backgroundColor: color,
    };
    setCount(customStyle);
  }
  return (
    <div className="card">
      <body style={customStyle.backgroundColor}></body>
      <button onClick={bgChange(red)}>red</button>
      <button onClick={bgChange(blue)}>blue</button>
    </div>
  );
}

export default App;
