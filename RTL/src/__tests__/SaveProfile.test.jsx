import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SaveProfile from "../component/SaveProfile";

describe("SaveProfile({ save })", () => {
  test("handle throw when save reject", async () => {
    const saveMock = vi.fn();
    saveMock.mockRejectedValue(new Error("fail"));

    render(<SaveProfile save={saveMock} />);

    const user = userEvent.setup();
    const btn = screen.getByRole("button", { name: /save/i });

    await user.click(btn);
    const alert = await screen.findByRole("alert");
    
    expect(alert).toHaveTextContent(/Something went wrong/i);
  });
});
