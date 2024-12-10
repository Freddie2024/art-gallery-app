import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from "./CommentForm";

describe("CommentForm Component", () => {
  it("renders an input field and a submit button", () => {
    render(<CommentForm onSubmitComment={jest.fn()} />);

    expect(
      screen.getByPlaceholderText("Add your comment...")
    ).toBeInTheDocument();
    expect(screen.getByText("Send")).toBeInTheDocument();
  });

  it("submits a comment and clears the input field", () => {
    const mockOnSubmitComment = jest.fn();

    render(<CommentForm onSubmitComment={mockOnSubmitComment} />);

    const input = screen.getByPlaceholderText("Add your comment...");
    const button = screen.getByText("Send");

    fireEvent.change(input, { target: { value: "Great art!" } });
    fireEvent.click(button);

    expect(mockOnSubmitComment).toHaveBeenCalledWith(
      expect.objectContaining({
        text: "Great art!",
        date: expect.any(String),
      })
    );

    expect(input.value).toBe("");
  });
});
