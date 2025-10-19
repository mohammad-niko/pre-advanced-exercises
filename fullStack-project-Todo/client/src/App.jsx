import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useReducer } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import { initialstate, taskReducer } from "./component/TaskReducer/reducer";
import { taskContext } from "./component/TaskContext/taskContext";



function App() {
  const [state,dispatch] = useReducer(taskReducer, initialstate);
  return (
    <>
      <Header />
      <taskContext.Provider value={{state,dispatch}}>
      <Main />
      </taskContext.Provider>
    </>
  );
}

export default App;
