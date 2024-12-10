import { render, screen } from "@testing-library/react";
import FavoritesPage from "../pages/favorites";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

jest.mock("../stores/useArtPiecesStore");

jest.mock("../components/FavoriteButton", () => {
  return function MockFavoriteButton({ isFavorite, onToggleFavorite }) {
    return (
      <button onClick={onToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    );
  };
});

jest.mock("../stores/useArtPiecesStore", () => {
  return jest.fn((selector) =>
    selector({
      artPiecesInfo: [
        {
          slug: "clay-bust-sculptures",
          imageSource:
            "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
          name: "Clay Bust Sculptures",
          artist: "dilara irem",
          isFavorite: true,
        },
      ],
      favorites: ["clay-bust-sculptures"],
    })
  );
});

describe("FavoritesPage", () => {
  beforeEach(() => {
    useArtPiecesStore.mockImplementation((selector) =>
      selector({
        artPiecesInfo: [
          {
            slug: "clay-bust-sculptures",
            imageSource:
              "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
            name: "Clay Bust Sculptures",
            artist: "dilara irem",
            isFavorite: true,
          },
        ],
        favorites: ["clay-bust-sculptures"],
      })
    );
  });

  test("renders a list of all favorite art pieces, where each image, title and artist and active favorite-button is displayed", () => {
    render(<FavoritesPage />);

    const image = screen.getByAltText("Clay Bust Sculptures");
    expect(image).toBeInTheDocument();

    expect(screen.getByText("Clay Bust Sculptures")).toBeInTheDocument();
    expect(screen.getByText("dilara irem")).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: /remove from favorites/i,
    });
    expect(button).toBeInTheDocument();
  });
});
