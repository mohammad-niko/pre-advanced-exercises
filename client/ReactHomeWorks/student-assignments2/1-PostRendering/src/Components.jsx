export const Card = ({ data }) => {
  const { userId, title, body } = data;
  return (
   
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{body}</p>
          <div className="card-link">user:{userId}</div>
        </div>
      </div>
    
  );
};

export const fetchData = async () => {
  try {
    const per = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await per.json();

    return data;
  } catch (error) {
    console.log();
  }
};
