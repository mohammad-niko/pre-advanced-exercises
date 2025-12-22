import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import LiveInput from "../components/5-LiveInput/LiveInput";

describe("LiveInput()", () => {
  it('should renders an input element with the placeholder "Enter a text and renders an h2 element', () => {
    render(<LiveInput />);
    //getByPlaceholderText it's not first chois.
    const input = screen.getByPlaceholderText("Enter a text");
    const heading = screen.getByRole("heading");

    expect(input).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  test("when a user type is to the input the h2 elemnt should displays the entered text",async () => {
    render(<LiveInput />);
    const user = userEvent.setup()
    //getByPlaceholderText it no first chois.
    const input = screen.getByPlaceholderText("Enter a text");
    const heading = screen.getByRole("heading");

    await user.type(input,"hello RTL");

    expect(heading).toHaveTextContent("hello RTL")
  });
});
