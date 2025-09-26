function ShowPlanets({ arrayOfPlanets }) {
  function randomKey() {
    return Math.floor(Math.random() * 1000);
  }
  return (
    <ul>
      {arrayOfPlanets.map((item) => (
        <li key={randomKey()}>{item}</li>
      ))}
    </ul>
  );
}

export default ShowPlanets;
