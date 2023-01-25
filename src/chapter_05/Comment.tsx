import React from "react";
import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";

interface CommentProps {
  name: string;
  comment: string;
}

const Comment = ({ name, comment }: CommentProps) => {
  return (
    <Card className="m-5">
      <CardBody className="flex">
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
          alt="avatar"
          variant="circular"
          className="mr-3"
        />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="paragraph">{comment}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default Comment;
