import { Button } from "@material-tailwind/react";
import React from "react";

interface ToolbarProps {
  isLoggedIn: boolean;
  onClickLogin: () => void;
  onClickLogout: () => void;
}

const Toolbar = ({ isLoggedIn, onClickLogin, onClickLogout }: ToolbarProps) => {
  return (
    <div className="p-4 flex flex-row border-b-2 border-solid border-gray-700">
      {isLoggedIn && <span className="mr-8">환영합니다!</span>}

      {isLoggedIn ? (
        <Button onClick={onClickLogout}>로그아웃</Button>
      ) : (
        <Button onClick={onClickLogin}>로그인</Button>
      )}
    </div>
  );
};

export default Toolbar;
