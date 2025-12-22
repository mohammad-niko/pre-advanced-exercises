import { render, screen } from "@testing-library/react";
import { Application } from "../components/optional/ApplicationFile/Applicationn";

describe("Application()", () => {
  test("the component renders all elemnt correctly", () => {
    render(<Application />);

    const h1 = screen.getByRole("heading", {
      level: 1,
      name: /Job Application Form/i,
    });

    expect(
      screen.getByRole("heading", { level: 2, name: /section/i })
    ).toBeInTheDocument();
    expect(screen.getByText("All fields are mandatory")).toBeInTheDocument();
    expect(screen.getByAltText("a person with a laptop")).toBeInTheDocument();
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Fullname")).toBeInTheDocument();
    expect(screen.getByLabelText(/bio/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /bio/i })).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByLabelText(/agree/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();
  });
});
