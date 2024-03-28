import Cards from "./cards";
import { render, screen } from "@testing-library/react";

test("renders a card with some dummy data", () => {
  render(
    <Cards
      title="Test Title"
      description="Test description"
      liveSite="https://example.com"
      github="https://example.com"
    />
  );
  const titleElement = screen.getByText(/Test Title/i);
  const descriptionElement = screen.getByText(/Test description/i);
  const liveSiteElement = screen.getByText(/Live Site/i);
  const githubElement = screen.getByText(/GitHub/i);
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(liveSiteElement).toBeInTheDocument();
  expect(githubElement).toBeInTheDocument();
});

test("renders a card without a live site link", () => {
  render(
    <Cards
      title="Test Title"
      description="Test description"
      github="https://example.com"
    />
  );
  const titleElement = screen.getByText(/Test Title/i);
  const descriptionElement = screen.getByText(/Test description/i);
  const liveSiteElement = screen.queryByText(/Live Site/i);
  const githubElement = screen.getByText(/GitHub/i);
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(liveSiteElement).toBeNull();
  expect(githubElement).toBeInTheDocument();
});

test("renders a card without a github link", () => {
  render(
    <Cards
      title="Test Title"
      description="Test description"
      liveSite="https://example.com"
    />
  );

  const titleElement = screen.getByText(/Test Title/i);
  const descriptionElement = screen.getByText(/Test description/i);
  const liveSiteElement = screen.getByText(/Live Site/i);
  const githubElement = screen.queryByText(/GitHub/i);
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(liveSiteElement).toBeInTheDocument();
  expect(githubElement).toBeNull();
});
