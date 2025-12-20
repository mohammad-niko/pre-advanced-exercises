import { render, screen } from "@testing-library/react";
import { Products } from "../component/Products";

describe("Products({ fetchProducts })", () => {
  test('when fetch is resolve should return "name"', async () => {
    const fetchProductsMock = vi.fn();
    fetchProductsMock.mockResolvedValue([{ id: 1, name: "laptop" }]);

    render(<Products fetchProducts={fetchProductsMock} />);
    const element = await screen.findByRole("listitem");

    expect(element).toHaveTextContent(/laptop/i);
  });

  test('when fetch is reject should return "Failed to load products"', async () => {
    const fetchProductsMock = vi.fn();
    fetchProductsMock.mockRejectedValue(new Error("error"));
    render(<Products fetchProducts={fetchProductsMock} />);
    const errorElemnt = await screen.findByRole("alert");

    expect(errorElemnt).toHaveTextContent(/failed to load products/i);
  });

  test("when fatched for data should return the loading", () => {
    const fetchProductsMock = vi.fn(() => new Promise(() => {}));
    render(<Products fetchProducts={fetchProductsMock} />);
    const elemnt = screen.getByRole("status");

    expect(elemnt).toHaveTextContent(/loading products/i);
  });
});
