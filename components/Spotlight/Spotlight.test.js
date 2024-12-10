import { render, screen } from "@testing-library/react";
import SpotlightPage from "./index";
import { useRouter } from "next/router";
import useArtPiecesStore from "../../stores/useArtPiecesStore";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../stores/useArtPiecesStore");

const mockArtPieces = [
  {
    slug: "clay-bust-sculptures",
    name: "Clay Bust Sculptures",
    artist: "Dilara Irem",
    year: "2022",
    genre: "Classics",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    colors: ["#ffffff", "#000000"],
  },
];

describe("SpotlightPage", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
      back: jest.fn(),
      pathname: "/",
    });

    useArtPiecesStore.mockImplementation((selector) =>
      selector({
        artPiecesInfo: mockArtPieces,
        favorites: [],
        toggleFavorite: jest.fn(),
        addComment: jest.fn(),
      })
    );
  });

  test("displays the art piece when slug is valid", () => {
    render(<SpotlightPage slug="clay-bust-sculptures" />);

    const image = screen.getByAltText("Clay Bust Sculptures");
    expect(image).toBeInTheDocument();

    const artist = screen.getByText("Dilara Irem");
    expect(artist).toBeInTheDocument();
  });

  test("displays fallback message when art piece is not found", () => {
    render(<SpotlightPage slug="non-existent-slug" />);
    expect(screen.getByText("No art piece found.")).toBeInTheDocument();
  });
});
