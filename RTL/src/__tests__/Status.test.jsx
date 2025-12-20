import { screen, render } from "@testing-library/react";
import { Status } from "../component/Status";
import { userEvent } from "@testing-library/user-event";

describe("Status()", () => {
  test("when user click on start button should render success",async () => {
    render(<Status/>);
    const user = userEvent.setup();
    const btn = screen.getByRole("button", { name: /start/i });
    await user.click(btn)

  
    expect(
        await screen.findByText(/success/i)
    ).toBeInTheDocument()
  });
});
