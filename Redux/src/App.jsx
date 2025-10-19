import { useState } from "react";
import "./App.css";
import Mmad from "./Component/Mmad";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Redux</h1>
      <br />
      <br />
      <Mmad />
    </>
  );
}

export default App;
