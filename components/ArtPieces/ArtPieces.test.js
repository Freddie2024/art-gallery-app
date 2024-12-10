import React from "react";
import { render, screen } from "@testing-library/react";
import ArtPieces from "./index"; // Adjust the import path based on your file structure

const mockPieces = [
  {
    slug: "orange-red-and-green-abstract-painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    name: "Orange Red and Green Abstract Painting",
    artist: "Steve Johnson",
  },
  {
    slug: "blue-and-red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    name: "Blue and Red",
    artist: "Jung-Hua Lui",
  },
];

test("renders a list of art pieces with image, title and artist", () => {
  render(<ArtPieces pieces={mockPieces} />);

  const artPieceList = screen.getByRole("list");
  expect(artPieceList).toBeInTheDocument();

  mockPieces.forEach(({ name, artist }) => {
    expect(screen.getByAltText(name)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(artist)).toBeInTheDocument();
  });
});
