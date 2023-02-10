import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <Button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </Button>
  );
}

export default ConfirmButton;
