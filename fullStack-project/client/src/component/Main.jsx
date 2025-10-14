import { useContext, useEffect, useRef, useState } from "react";
import Task from "./Task/Task";
import { taskContext } from "./TaskContext/taskContext";
import { getTasks, postTask } from "./Fetch/fetchData";

function Main() {
  const { state, dispatch } = useContext(taskContext);
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  async function handleOnKeyDown(e) {
    try {
      if (e.target.value.trim() === "") return;
      if (e.key === "Enter") {
        dispatch({ type: "add", payload: e.target.value });

        // post to the server
        await postTask({
          description: e.target.value,
          isCompleted: false,
          user_ID: "68e66650845538b847e773fe",
        });
        setNewTask("");
      }
      
    } catch (error) {
      console.log(`error in handleOnKeyDown: ${error}`);
    }
  }

  async function handleOnChange() {
    try {
      if (newTask.trim() === "") return;
      dispatch({ type: "add", payload: newTask });

      // post to the server
      await postTask({
        description: newTask,
        isCompleted: false,
        user_ID: "68e66650845538b847e773fe",
      });
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

        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [state, newTask]);
  // console.log(tasks);
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
          {tasks.map((item) => {
            return <Task key={item._id} taskData={item} />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Main;
