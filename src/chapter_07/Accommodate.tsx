import { Button, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
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
    <div className="p-4">
      <Typography>{`총 ${count}명 수용했습니다.`}</Typography>

      <Button onClick={increaseCount as () => void} disabled={isFull}>
        입장
      </Button>
      <Button onClick={decreaseCount as () => void}>퇴장</Button>

      {isFull && <Typography color="red">정원이 가득찼습니다.</Typography>}
    </div>
  );
};

export default Accommodate;
