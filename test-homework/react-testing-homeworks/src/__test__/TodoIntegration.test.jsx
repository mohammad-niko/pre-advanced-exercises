import { screen, render, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TodoContainer from "../components/6-TodoApp/TodoContainer";

function setup() {
  const user = userEvent.setup();
  // I know should render App.jsx but for reasen I render TodoContainer.
  render(<TodoContainer />);
  return { user };
}

describe("Todo App integration test", () => {
  test("user can write task and add it", async () => {
    const { user } = setup();
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button", { name: /add todo/i });
    const text = "Do homework";

    await user.type(input, text);
    await user.click(btn);

    const itemElement = screen.getByText(text);
    expect(itemElement).toBeInTheDocument();
  });

  test("renders all submitted todos as list items", async () => {
    const { user } = setup();
    const input = screen.getByRole("textbox");
    const btn = screen.getByRole("button", { name: /add todo/i });
    const todos = [
      "Learn React Testing Library",
      "Write integration tests",
      "Refactor tests cleanly",
    ];

    for (const todo of todos) {
      await user.clear(input);
      await user.type(input, todo);
      await user.click(btn);
    }

    const list = screen.getByRole("list");
    const items = within(list).getAllByRole("listitem");

    expect(items).toHaveLength(todos.length);

    todos.forEach((todo) => {
      expect(screen.getByText(todo)).toBeInTheDocument();
    });
  });
});
