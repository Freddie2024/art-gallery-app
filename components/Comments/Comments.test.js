import { render, screen } from "@testing-library/react";
import Comments from "./Comments";
import useArtPiecesStore from "../../stores/useArtPiecesStore";

jest.mock("../../stores/useArtPiecesStore");

const mockComments = {
  "art-piece-1": [
    { text: "Amazing art!", date: "2025-01-01, 10:00 AM" },
    { text: "I love it!", date: "2025-01-02, 11:00 AM" },
  ],
};

describe("Comments Component", () => {
  beforeEach(() => {
    useArtPiecesStore.mockImplementation((selector) =>
      selector({ comments: mockComments })
    );
  });

  it("displays a list of comments with text, date, and time", () => {
    render(<Comments slug="art-piece-1" />);

    screen.debug();

    expect(screen.getByText("Amazing art!")).toBeInTheDocument();
    expect(screen.getByText("I love it!")).toBeInTheDocument();

    expect(screen.getByText("2025-01-01, 10:00 AM")).toBeInTheDocument();
    expect(screen.getByText("2025-01-02, 11:00 AM")).toBeInTheDocument();
  });

  it("displays a fallback message when no comments are present", () => {
    useArtPiecesStore.mockImplementation((selector) =>
      selector({ comments: { "art-piece-2": [] } })
    );

    render(<Comments slug="art-piece-2" />);

    expect(screen.getByText("No comments yet.")).toBeInTheDocument();
  });
});
