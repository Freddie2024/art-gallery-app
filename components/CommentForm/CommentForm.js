import React, { useState } from "react";
import styled from "styled-components";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

const StyledButton = styled.button`
  position: relative;
  padding: 10px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;
  width: auto;
  max-width: 80px;

  &:hover {
    background-color: lightgrey;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #666;
    box-shadow: 0 0 5px rgba(102, 102, 102, 0.5);
  }
`;

const CommentForm = ({ onSubmitComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        text: comment,
        date: new Date().toLocaleString(),
      };
      onSubmitComment(newComment);
      setComment("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <StyledInput
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add your comment..."
        required
      />
      <StyledButton type="submit">Send</StyledButton>
    </form>
  );
};

export default CommentForm;
