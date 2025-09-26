// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CustomerInformation } from "../component";


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
