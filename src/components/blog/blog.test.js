import Blog from "./blog";
import { render, screen } from "@testing-library/react";

test("renders blog title", () => {
  render(<Blog />);
  const titleElement = screen.getByText(/Blog/i);
  expect(titleElement).toBeInTheDocument();
});
