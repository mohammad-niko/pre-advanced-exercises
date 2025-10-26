import { useContext } from "react";
import { taskContext } from "../TaskContext/taskContext";
import { deleteTask, TaskComplet } from "../Fetch/fetchData";
import { useDispatch } from "react-redux";
import { DELETEAction, TOGGLEAction } from "../../Redux/actions/taskActions";

export function IsEdit() {
  return (
    <>
      {/* onBlur */}
      <input type="text" className="form-control edit-input" />

      <button className="btn btn-info">cansel</button>
    </>
  );
}

export function IsNotEdit({ data }) {

  const dispatch = useDispatch();
  const { description, isCompleted, _id, user_ID } = data;

  async function hendleOClickComplet() {
    try {
      await TaskComplet({
        _id: _id,
        user_ID: user_ID,
        isCompleted: !isCompleted,
      });

      dispatch(TOGGLEAction(_id));
    } catch (error) {
      console.log(`error in hendle: ${error}`);
    }
  }

  async function handleRemoveTask() {
    try {
      await deleteTask(_id, user_ID);
      dispatch(DELETEAction(_id));
    } catch (error) {
      console.log(`error in handleRemoveTask: ${error}`);
    }
  }
  return (
    <>
      <input
        type="checkbox"
        onChange={hendleOClickComplet}
        className="form-check-input"
        aria-label="..."
        checked={isCompleted}
      />
      <p
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        className="task-title"
      >
        {description}
      </p>

      <button className="btn btn-danger" onClick={handleRemoveTask}>
        <i className="bi bi-trash3"></i>
      </button>
    </>
  );
}
