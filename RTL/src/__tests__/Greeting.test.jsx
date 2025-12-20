import { render, screen } from "@testing-library/react";
import Greeting from "../component/Greeting";

describe("Greeting Component", () => {
  // Happy Path
  test('should render "Hello Mohammad" when name is provided', () => {
    render(<Greeting name="Mohammad" />);

    expect(screen.getByText("Hello Mohammad")).toBeInTheDocument();

    expect(screen.queryByText(/please login/i)).toBeNull();
  });

  // Bad Path
  test("should render 'Please login' when name is missing", () => {
    render(<Greeting />);

    expect(screen.getByText("Please login")).toBeInTheDocument();

    expect(screen.queryByText(/Hello/i)).toBeNull();
  });
});
