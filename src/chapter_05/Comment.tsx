import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Avatar from "boring-avatars";

interface CommentProps {
  name: string;
  comment: string;
}

const Comment = ({ name, comment }: CommentProps) => {
  return (
    <Card className="m-5">
      <CardBody className="flex items-center space-x-3">
        <Avatar
          name={name}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography className="font-normal" variant="paragraph">
            {comment}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default Comment;
