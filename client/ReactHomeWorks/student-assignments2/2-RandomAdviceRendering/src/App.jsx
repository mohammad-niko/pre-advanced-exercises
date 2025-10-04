import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [anothrAdvice, setAnothrAdvice] = useState(0);
  const [isLoading, setlsLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [countDown, setCountDown] = useState(1);
  useEffect(() => {
    let timer;
    async function fetchAdvice() {
      try {
        setlsLoading(true);
        setDisabledBtn(true);
        setCountDown(1);
        const per = await fetch("https://api.adviceslip.com/advice");
        const data = await per.json();

        setData(data.slip.advice);
      } catch (error) {
        console.log(error);
      } finally {
        setlsLoading(false);

        timer = setInterval(() => {
          setCountDown((prevCountdown) => {
            if (prevCountdown <= 0) {
              clearInterval(timer);
              setDisabledBtn(false);
              return 0;
            }
            return prevCountdown - 1;
          });
        }, 1000);
        return () => clearInterval(timer);
      }
    }
    fetchAdvice();
  }, [anothrAdvice]);

  function handleClick() {
    setAnothrAdvice(Math.floor(Math.random() * 1000));
  }

  return (
    <div>
      <p className="advice">{isLoading ? "Loading..." : data}</p>
      <button
        className="advice-btn"
        onClick={handleClick}
        disabled={disabledBtn}
      >
        {disabledBtn ? `Wait ${countDown}s` : "Get new advice"}
      </button>
    </div>
  );
}

export default App;
