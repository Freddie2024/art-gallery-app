import React, { useMemo } from "react";
import useArtPiecesStore from "@/stores/useArtPiecesStore";
import styled from "styled-components";

const CommentsList = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 14px;
`;

const Comments = ({ slug }) => {
  const allComments = useArtPiecesStore((state) => state.comments);
  const comments = useMemo(() => {
    return allComments[slug] || [];
  }, [allComments, slug]);

  if (!slug) {
    return <p>Error: No slug provided.</p>;
  }

  return (
    <CommentsList>
      {comments.length === 0 ? (
        <CommentItem>No comments yet.</CommentItem>
      ) : (
        comments.map((comment, index) => (
          <CommentItem key={index}>
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </CommentItem>
        ))
      )}
    </CommentsList>
  );
};

export default Comments;
