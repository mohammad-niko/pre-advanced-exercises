import { screen, render } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";

describe(" ListOfLi({ usernames })", () => {
  it("when provided with a list of usernames the component should renders the correct number", () => {
    const mockData = ["john", "sam", "jasem", "tom"];
    render(<ListOfLi usernames={mockData} />);
    const lis = screen.getAllByRole("listitem");

    expect(lis).toHaveLength(mockData.length);
  });
});
