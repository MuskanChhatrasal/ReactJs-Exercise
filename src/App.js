import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(40);

  function inputChange(e) {
    setCount(40 - e.target.value.length);
  }
  return (
    <div className="App">
      <h1>Twitter Count</h1>
      <textarea onChange={(e) => inputChange(e)}></textarea>
      <div>Count: {count}</div>
    </div>
  );
}
