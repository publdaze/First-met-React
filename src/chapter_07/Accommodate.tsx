import React, { useState, useEffect } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { MdWarningAmber } from "react-icons/md";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

const Accommodate = () => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("======================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <Card className="flex flex-row items-center justify-between p-4">
      <Typography variant="lead">{`총 ${count}명 수용했습니다.`}</Typography>
      {isFull && (
        <div className="flex items-center">
          <MdWarningAmber color="red" className="mr-2" />
          <Typography className="font-semibold" color="red" variant="paragraph">
            정원이 가득찼습니다.
          </Typography>
          <MdWarningAmber color="red" className="ml-2" />
        </div>
      )}
      <div className="space-x-2">
        <Button
          color="blue"
          onClick={increaseCount as () => void}
          disabled={isFull}
        >
          입장
        </Button>
        <Button color="red" onClick={decreaseCount as () => void}>
          퇴장
        </Button>
      </div>
    </Card>
  );
};

export default Accommodate;
