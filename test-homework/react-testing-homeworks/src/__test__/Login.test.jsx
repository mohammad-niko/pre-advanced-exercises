import { screen, render } from "@testing-library/react";
import Login from "../components/4-Login/Login";
import { userEvent } from "@testing-library/user-event";

describe("Login()", () => {
  it("should renders a button that displays 'login' as its initial text", () => {
    render(<Login />);
    const btn = screen.getByRole("button", { name: /login/i });

    expect(btn).toBeInTheDocument();
  });

  it('text changes to "logout" when clicked.', async () => {
    render(<Login />);
    const user = userEvent.setup();
    const btn = screen.getByRole("button", { name: /login/i });
    expect(btn).toHaveTextContent(/login/i);
    await user.click(btn);
    expect(btn).toHaveTextContent(/logout/i);
  });
});
