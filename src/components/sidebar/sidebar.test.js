// FILEPATH: /Users/billywalker/projects/react-portfolio/src/components/sidebar/sidebar.test.js

import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./sidebar";

describe("Sidebar component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
  });

  it("renders without crashing", () => {
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  it("renders all the links", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);
  });

  it("renders the correct link texts", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders the correct link destinations", () => {
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Contact").closest("a")).toHaveAttribute(
      "href",
      "/contact"
    );
    expect(screen.getByText("Portfolio").closest("a")).toHaveAttribute(
      "href",
      "/portfolio"
    );
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute(
      "href",
      "/blog"
    );
    expect(screen.getByText("GitHub").closest("a")).toHaveAttribute(
      "href",
      "https://www.github.com/Korjubzot"
    );
    expect(screen.getByText("LinkedIn").closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/billy-walker-ab0013278/"
    );
  });
});
