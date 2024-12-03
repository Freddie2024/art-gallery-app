import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/link", () => {
  return function Link({ href, children }) {
    return <a href={href}>{children}</a>;
  };
});

describe("Navigation Component", () => {
  test('The "Spotlight"-Link is displayed', () => {
    render(<Navigation />);

    const spotlightLink = screen.getByRole("link", { name: /spotlight/i });
    expect(spotlightLink).toBeInTheDocument();
  });

  test('The "Show All"-Link is displayed', () => {
    render(<Navigation />);

    const showAllLink = screen.getByRole("link", { name: /show all/i });
    expect(showAllLink).toBeInTheDocument();
  });

  test('The "Favorites"-Link is displayed', () => {
    render(<Navigation />);

    const favoritesLink = screen.getByRole("link", { name: /favorites/i });
    expect(favoritesLink).toBeInTheDocument();
  });
});
