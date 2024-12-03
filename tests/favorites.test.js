import { render } from "@testing-library/react";
import FavoritesPage from "../pages/favorites";
import useArtPiecesStore from "../stores/useArtPiecesStore";
import FavoriteButton from "../components/FavoriteButton";

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

describe("FavoritesPage", () => {
  test("renders a list of all favorite art pieces, where each image, title and artist and active favorite-button is displayed", () => {
    useArtPiecesStore.mockReturnValue({
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
    });

    const { getByAltText, getByText, getByRole } = render(<FavoritesPage />);

    const image = getByAltText("Clay Bust Sculptures");
    expect(image).toBeInTheDocument();

    expect(getByText("Clay Bust Sculptures")).toBeInTheDocument();
    expect(getByText("dilara irem")).toBeInTheDocument();

    const button = getByRole("button", { name: /remove from favorites/i });
    expect(button).toBeInTheDocument();
  });
});
