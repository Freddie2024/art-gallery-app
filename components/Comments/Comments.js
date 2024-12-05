import React, { useMemo } from "react";
import useArtPiecesStore from "@/stores/useArtPiecesStore";

const Comments = ({ slug }) => {
  const allComments = useArtPiecesStore((state) => state.comments);
  console.log("All comments:", allComments);
  console.log("Current slug:", slug);
  const comments = useMemo(() => {
    console.log("Memoizing comments for slug:", slug);
    return allComments[slug] || [];
  }, [allComments, slug]);

  if (!slug) {
    return <p>Error: No slug provided.</p>;
  }

  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;