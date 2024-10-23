import { render, screen } from "@testing-library/react";
import ArtPieces from ".";
import React from "react";

jest.mock("next/link", () => {
  return function Link({ href, children }) {
    return <a href={href}>{children}</a>;
  };
});
jest.mock("../Spotlight", () => () => null);
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
  },
}));
test("renders a list of art pieces", () => {
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
      imageSource:
        "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
      name: "Blue and Red",
      artist: "Jung-Hua Lui",
    },
  ];

  render(<ArtPieces pieces={mockPieces} />);

  const artPieceList = screen.getByRole("list");
  expect(artPieceList).toBeInTheDocument();

  const artPieceItems = screen.getAllByRole("listitem");
  expect(artPieceItems).toHaveLength(2);

  mockPieces.forEach((artPiece) => {
    const image = screen.getByAltText(artPiece.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", artPiece.imageSource);

    const title = screen.getByText(artPiece.name);
    expect(title).toBeInTheDocument();

    const artist = screen.getByText(artPiece.artist);
    expect(artist).toBeInTheDocument();
  });
});
