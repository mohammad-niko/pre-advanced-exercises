import { produce } from "immer";
import {
  ADD,
  DELETE,
  TOGGLE,
  EDIT,
  SETALLTASKS,
} from "../../Redux/actions/taskActions";
import { v4 as uuid } from "uuid";
export const initialstate = {
  tasks: [],
};
export const taskReducer = produce((draft, action) => {
  switch (action.type) {
    case SETALLTASKS:
      action.payload.map((item) => draft.tasks.push(item));
      break;
    case ADD:
      draft.tasks.push(action.payload);
      break;
    case DELETE:
      draft.tasks = draft.tasks.filter((item) => item._id !== action.payload);
      break;
    case EDIT:
      break;
    case TOGGLE:
      const taskToToggle = draft.tasks.find(
        (item) => item._id === action.payload
      );
      if (taskToToggle) taskToToggle.isCompleted = !taskToToggle.isCompleted;
      break;
  }
}, initialstate);
