import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((isDarkTheme)=> !isDarkTheme);
  };

  useEffect(() => {
    const body = document.body;


    body.classList.add("light-theme");
    if (!isDarkTheme) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    } else {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    }
  }, [isDarkTheme]);
  return (
    <>
      <button onClick={toggleTheme}>{isDarkTheme ? "dark" : "light"} </button>
    </>
  );
}

export default App;
