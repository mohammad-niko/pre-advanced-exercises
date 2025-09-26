import { CustomerInformation } from "./CustomerInformation";


function App() {
  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };

  return (
    <>
      <CustomerInformation data={customer} />
    </>
  );
}

export default App;