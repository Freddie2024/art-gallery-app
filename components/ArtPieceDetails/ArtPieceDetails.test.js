import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./index";
import useArtPiecesStore from "../../stores/useArtPiecesStore";

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

describe("ArtPieceDetails", () => {
  beforeEach(() => {
    useArtPiecesStore.mockImplementation((selector) =>
      selector({
        artPiecesInfo: mockArtPieces,
        favorites: [],
        toggleFavorite: jest.fn(),
        addComment: jest.fn(),
        comments: {
          "clay-bust-sculptures": [
            { text: "Amazing art!", date: "2024-12-01" },
          ],
        },
      })
    );
  });

  test("renders ArtPieceDetails with image, title, artist, year, genre, and back-button", () => {
    render(<ArtPieceDetails slug="clay-bust-sculptures" onBack={jest.fn()} />);

    const image = screen.getByAltText("Clay Bust Sculptures");
    expect(image).toBeInTheDocument();

    expect(screen.getByText("Clay Bust Sculptures")).toBeInTheDocument();
    expect(screen.getByText(/Dilara Irem/i)).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("Classics")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /back/i });
    expect(button).toBeInTheDocument();
  });
});
