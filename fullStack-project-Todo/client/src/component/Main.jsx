import { useEffect, useRef, useState } from "react";
import Task from "./Task/Task";
import { getTasks, postTask } from "./Fetch/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { ADDAction, SETALLAction } from "../Redux/actions/taskActions";

function Main() {
  const [newTask, setNewTask] = useState("");

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const tasksFromStore = useSelector((store) => store.tasks);

  async function handleOnKeyDown(e) {
    try {
      if (e.target.value.trim() === "") return;
      if (e.key === "Enter") {
        // post to the server
        const data = await postTask({
          description: e.target.value,
          isCompleted: false,
          user_ID: "68e66650845538b847e773fe",
        });

        dispatch(ADDAction(data));

        setNewTask("");
      }
    } catch (error) {
      console.log(`error in handleOnKeyDown: ${error}`);
    }
  }

  async function handleOnChange() {
    try {
      if (newTask.trim() === "") return;
      // post to the server
      const data = await postTask({
        description: newTask,
        isCompleted: false,
        user_ID: "68e66650845538b847e773fe",
      });
      dispatch(ADDAction(data));
      setNewTask("");
    } catch (error) {
      console.log(`error in handleOnChange: ${error}`);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    async function fetch() {
      try {
        const data = await getTasks("68e66650845538b847e773fe");
        dispatch(SETALLAction(data));
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="form-container">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={newTask}
            ref={inputRef}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => handleOnKeyDown(e)}
          />
          <button className="btn btn-primary" onClick={handleOnChange}>
            Add
          </button>
        </div>
        <ul className="task-container">
          {tasksFromStore &&
            tasksFromStore.map((item) => {
              return <Task key={item._id} taskData={item} />;
            })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
