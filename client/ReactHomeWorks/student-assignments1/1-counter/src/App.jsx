import { useState } from "react";
import { CreateBtn } from "./Components";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
     setCount((count) => count + 1);
  }

  function handelIncreases() {
     setCount((count) => count - 1);
  }

  function handelRestart() {
     setCount(0);
  }

  return (
    <>
      <div style={{ textAlign: "center", margin: "50px" }}>
        you click onn button {count} {(count>1) ? "times" : "time"}
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CreateBtn elementText="add" onClick={handleIncrease} color="green" />
        <CreateBtn elementText="less" onClick={handelIncreases} color="red" />
        <CreateBtn elementText="restart" onClick={handelRestart} color="gray" />
      </div>
    </>
  );
}

export default App;
