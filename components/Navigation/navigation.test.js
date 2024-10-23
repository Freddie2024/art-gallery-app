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

  test('The "Pieces"-Link is displayed', () => {
    render(<Navigation />);

    const piecesLink = screen.getByRole("link", { name: /pieces/i });
    expect(piecesLink).toBeInTheDocument();
  });
});
