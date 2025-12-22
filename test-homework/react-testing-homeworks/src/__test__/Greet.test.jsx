import { screen, render } from "@testing-library/react";
import Greet from "../components/3-Greet/Greet";

describe("Greet({ name })", () => {
  test("if the component renders the correct text when no name prop is passed ", () => {
    render(<Greet />);
    const ele = screen.getByText("hello");
    expect(ele).toBeInTheDocument();
  });

    test("if the component renders the correct text when the name prop is passed.", () => {
        const userName = "mohammad"
        render(<Greet name={userName}/>);
    const ele = screen.getByText(`hello ${userName}`);
    expect(ele).toBeInTheDocument();
  });
});
