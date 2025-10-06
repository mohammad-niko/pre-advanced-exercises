import { useEffect, useReducer, useState } from "react";
import { fetchData } from "./fetchData";

const initialState = [];
function taskReducer(state, action) {
  switch (action.type) {
    case "set-all":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    case "complet":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );

    default:
      return state;
  }
}

export function Main() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [taskInput, setTaskinput] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const get = await fetchData();

        if (!get) throw new Error("Can't get data: 404");

        dispatch({
          type: "set-all",
          payload: get,
        });
      } catch (error) {
        console.log("can't get data: " + error);
      }
    }
    getData();
  }, []);

  function handleClickInput(e) {
    setTaskinput(e.target.value);
  }

  function handleAddNewTask() {
    console.log(taskInput.length);
    //validation:
    if (taskInput.trim() === "") return alert("you can't set empty task");
    if (state.find(({ title }) => title === taskInput.trim())) {
      setTaskinput("");
      return alert("This task already exists!");
    }
    dispatch({
      type: "add",
      payload: {
        id: Date.now(),
        title: taskInput,
        completed: false,
      },
    });
    setTaskinput("");
  }

  return (
    <section className="parent-section">
      <h1 className="todo-title">ToDo List</h1>
      <div className="input-parent">
        <input
          type="text"
          placeholder="New Task"
          className="form-control"
          onChange={handleClickInput}
          value={taskInput}
          onKeyDown={(e) => e.key === "Enter" && handleAddNewTask()}
        />
        <button className="btn btn-primary" onClick={handleAddNewTask}>
          Add
        </button>
      </div>
      <ul className="Task-list">
        {state?.map((item) => {
          return <Task key={item.id} data={item} dataSeterFunc={dispatch} />;
        })}
      </ul>
    </section>
  );
}

function Task({ data, dataSeterFunc }) {
  const { title, completed, id } = data;

  return (
    <li className="task-lise-item">
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => dataSeterFunc({ type: "complet", payload: id })}
        checked={completed}
      />

      <p
        style={{ textDecoration: completed ? "line-through" : "none" }}
        className="title"
      >
        {title}{" "}
      </p>

      <div
        className="btn btn-danger remove-i"
        onClick={() => dataSeterFunc({ type: "remove", payload: id })}
      >
        <i className="bi bi-trash3"></i>
      </div>
    </li>
  );
}
