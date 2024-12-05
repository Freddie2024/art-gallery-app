import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  padding: 10px 20px;
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

  &:hover {
    background-color: lightgrey;
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
    <form onSubmit={handleSubmit}>
      <input
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
