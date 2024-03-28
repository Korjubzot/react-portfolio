import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from "./hero";

describe("Hero component", () => {
  function setup() {
    render(
      <Router>
        <Hero />
      </Router>
    );
    // es-lint insists that this is a better way of doing beforeEach
    // it looks an awful lot like beforeEach with extra steps to me
  }

  test("renders without crashing", () => {
    setup();
    const heroElement = screen.getByTestId("hero");
    expect(heroElement).toBeInTheDocument();
  });

  test("displays correct texts", () => {
    setup();

    const titleElement = screen.getByText("Hello Handsome");
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByText("Nice to meet you");
    expect(subtitleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(
      /I'm Billy, a passionate software engineer/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test("displays correct image", () => {
    setup();

    const imageElement = screen.getByAltText("Billy's portrait");
    expect(imageElement).toBeInTheDocument();
  });

  test("displays correct link with expected attributes", () => {
    setup();

    const portfolioLinkElement = screen.getByText("Portfolio");
    expect(portfolioLinkElement).toBeInTheDocument();
    expect(portfolioLinkElement).toHaveAttribute("href", "/portfolio");

    const contactLinkElement = screen.getByText("Contact");
    expect(contactLinkElement).toBeInTheDocument();
    expect(contactLinkElement).toHaveAttribute("href", "/contact");
  });
});
