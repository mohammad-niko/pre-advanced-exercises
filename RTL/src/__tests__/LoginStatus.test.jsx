import { render, screen } from "@testing-library/react";
import { LoginStatus } from "../component/LoginStatus";

describe(" LoginStatus({ error, loading })", () => {
  test('when no error and not loading should render "Welcome"', () => {
    render(<LoginStatus />);

    expect(screen.getByRole("status")).toHaveTextContent(/welcome/i);
  });

  test('when have error should render "Invalid credentials"', () => {
    render(<LoginStatus error={true} />);
    const errorElemnt = screen.getByRole("alert");

    expect(errorElemnt).toHaveTextContent(/Invalid credentials/i);
  });

  test('when wait for resive data should render "loading"', () => {
    render(<LoginStatus loading={true} />);
    const errorElemnt = screen.getByRole("status");

    expect(errorElemnt).toHaveTextContent(/loading/i);
  });
});
