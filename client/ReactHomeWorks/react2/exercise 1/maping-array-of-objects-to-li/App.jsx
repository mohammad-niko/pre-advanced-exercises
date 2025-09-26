import ShowPlanets from "./ShowPlanets";

function App() {
  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  return <ShowPlanets arrayOfPlanets={planets} />;
}

export default App;
