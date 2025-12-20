import { useState } from "react";

export function Status() {
  const [status, setStatus] = useState("idle");

  const start = async () => {
    setTimeout(() => setStatus("success"), 300);
  };

  return (
    <>
      <button onClick={start}>Start</button>
      <p>{status}</p>
    </>
  );
}
