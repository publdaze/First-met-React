import React from "react";

interface CommentProps {
  name: string;
  comment: string;
}

const Comment = ({ name, comment }: CommentProps) => {
  return (
    <div>
      <h1>제가 만든 첫 컴포넌트입니다.</h1>
    </div>
  );
};

export default Comment;
