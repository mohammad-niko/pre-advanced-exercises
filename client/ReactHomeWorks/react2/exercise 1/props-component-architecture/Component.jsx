function PokeCard({ data }) {
  const { id, name, type, image } = data;
  return (
    <div key={id} className="my-card">
      <h2 className="my-card-title">{name}</h2>
      <img src={image} alt="pokemen image" />
      <h4>type:{type}</h4>
    </div>
  );
}

function Pokedex({ data }) {
  return (
  <div className="container">
      {data.map((item) => (
        <PokeCard data={item} />
      ))}
    </div>
  );
}

export default Pokedex;
