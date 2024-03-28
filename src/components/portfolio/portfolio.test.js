import { render, screen } from "@testing-library/react";
import Portfolio from "./portfolio";

describe("Portfolio component", () => {
  it("renders without crashing", () => {
    render(<Portfolio />);
  });

  it("renders the correct number of Cards", () => {
    render(<Portfolio />);
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(4);
  });

  it("renders the correct card titles", () => {
    render(<Portfolio />);
    const cardTitles = screen.getAllByRole("heading", { level: 3 });
    expect(cardTitles[0]).toHaveTextContent("Weather Forecast");
    expect(cardTitles[1]).toHaveTextContent("DLicious Recipe Database");
    expect(cardTitles[2]).toHaveTextContent("Bluesky Bot");
    expect(cardTitles[3]).toHaveTextContent("Pomodoro Timer");
  });

  it("renders the correct card descriptions", () => {
    render(<Portfolio />);
    const cardDescriptions = screen.getAllByTestId("card-description");
    expect(cardDescriptions[0]).toHaveTextContent(
      "React-based weather forecaster that pulls and displays data from an API."
    );
    expect(cardDescriptions[1]).toHaveTextContent(
      "Full-stack recipe storage database, with user authentication and storage provided by Supabase."
    );
    expect(cardDescriptions[2]).toHaveTextContent(
      "Node.js based bot that automatically posts images to the Bluesky social media platform via API."
    );
    expect(cardDescriptions[3]).toHaveTextContent(
      "A simple React-based Pomodoro timer that helps users stay focused and productive."
    );
  });
});
