export function CustomerInformation({ data }) {
  const { first_name: fname, last_name: lname } = data;
  return (
    <div>
      <h1>My name is {fname}</h1>
      <h2>My last name is {lname}</h2>
    </div>
  );
}
