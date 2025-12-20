import { Counter } from "../component/Counter";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("Counter()", () => {
  test("when user click on the button that should add one more to count",async () => {
    render(<Counter />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /increment/i });
   
  await  user.click(button);

   

   expect(screen.getByText(/count:\s*1/i)).toBeInTheDocument()
  });
});
