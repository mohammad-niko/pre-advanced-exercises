import "./App.css";
import SimpleForm from "./Components/Forms/SimpleForms/SimpleForm";
import SimpleForm2 from "./Components/Forms/SimpleForms2/SimpleForm2";
import { Simpleform3 } from "./Components/Forms/SimpleForms3/Simpleform3";
import { useRoutes } from "react-router";
import { routes } from "./Routes/Routes";
import MultiStepForm from "./Components/Forms2/MultiStepForm";

function App() {
  const Routes = useRoutes(routes);
  return (
    <>
      {Routes}

      
    </>
  );
}

export default App;
