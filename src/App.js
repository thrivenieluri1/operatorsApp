import "./App.css";
import Keypad from "./keypad";
import { useState } from "react";

function App() {
  let [input, setInput] = useState("");
  function handleClick(value)  {
    setInput(input + value);
  };
  function clearInput(value)  {
    setInput("");
  };
  function calculate(value)  {
    let output = eval(input)
    setInput(output);
  };
  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div className="calculator">
        <input type="text" value={input} className="output" />
        <Keypad handleClick={handleClick} clear={clearInput} cal={calculate} />
      </div>
    </div>
  );
}

export default App;
