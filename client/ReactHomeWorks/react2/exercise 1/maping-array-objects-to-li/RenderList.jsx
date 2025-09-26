function RenderList({ arrayOfList }) {
  function randomKey() {
    return Math.floor(Math.random() * 1000);
  }

  return (
    <ul>
      {arrayOfList.map((item) => (
        <li key={randomKey()}>{item.label}</li>
      ))}
    </ul>
  );
}

export default RenderList;
