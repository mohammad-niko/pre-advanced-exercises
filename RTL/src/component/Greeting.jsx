function Greeting({ name }) {
  if (!name) return <p>Please login</p>;
  return <h1>Hello {name}</h1>;
}

export default Greeting;
