import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <Button
      className={
        isConfirmed
          ? "bg-gray-500 w-24"
          : "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-24"
      }
      onClick={handleConfirm}
      disabled={isConfirmed}
    >
      {isConfirmed ? "확인됨" : "확인하기"}
    </Button>
  );
}

export default ConfirmButton;
