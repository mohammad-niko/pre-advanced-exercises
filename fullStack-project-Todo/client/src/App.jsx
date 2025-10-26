import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useReducer } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
// use useContaxt and useReduser
// import { initialstate, taskReducer } from "./component/TaskReducer/reducer";
// import { taskContext } from "./component/TaskContext/taskContext";
//use Redux
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  // const [state,dispatch] = useReducer(taskReducer, initialstate);
  return (
    <>
      <Header />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
