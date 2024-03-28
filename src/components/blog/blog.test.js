import Blog from "./blog";
import { render, screen } from "@testing-library/react";

test("renders blog title", () => {
  render(<Blog />);
  const titleElement = screen.getByText(/Pardon our dust/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders blog subtitle", () => {
  render(<Blog />);
  const subtitleElement = screen.getByText(
    /My blog is still under construction./i
  );
  expect(subtitleElement).toBeInTheDocument();
});

test("renders blog description", () => {
  render(<Blog />);
  const descriptionElement = screen.getByText(
    /Feel free to check out the rest of my portfolio, though./i
  );
  expect(descriptionElement).toBeInTheDocument();
});
