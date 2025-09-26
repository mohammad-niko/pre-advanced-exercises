import RenderList from "./RenderList";

function App() {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  return <RenderList arrayOfList={animals} />;
}

export default App;
