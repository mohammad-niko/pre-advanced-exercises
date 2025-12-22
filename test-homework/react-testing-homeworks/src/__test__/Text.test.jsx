import { screen, render } from "@testing-library/react";
import Text from "../components/1-Text/Text";

describe("Text({ headingText })", () => {
  it("should return heading with the provided text when component called with headingText", () => {
    render(<Text headingText="Hello World" />);
    const heading = screen.getByRole("heading", { name: /hello world/i });
    const text = screen.getByText(/Welcome To APS/i);
    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
