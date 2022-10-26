import { render, screen } from "@testing-library/react";
import Pagination from "../components/pagination.jsx";

describe("Pagination component", () => {
  test("renders button to advance to the next page", () => {
    render(<Pagination />);
    let button = screen.getByText(/Next/i);
    expect(button).toBeInTheDocument();
  });
});
