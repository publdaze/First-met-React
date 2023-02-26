import { Button, Typography } from "@material-tailwind/react";
import React from "react";

interface ToolbarProps {
  isLoggedIn: boolean;
  onClickLogin: () => void;
  onClickLogout: () => void;
}

const Toolbar = ({ isLoggedIn, onClickLogin, onClickLogout }: ToolbarProps) => {
  return (
    <div className="p-4 flex border-b-2 border-purple-500">
      <div className="w-full flex justify-between items-center">
        <Typography
          className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
          variant="h3"
        >
          #LOGO#
        </Typography>
        {isLoggedIn && (
          <Typography color="deep-purple" variant="lead">
            🎉 환영합니다! 🎉
          </Typography>
        )}
        {isLoggedIn ? (
          <Button color="deep-purple" onClick={onClickLogout}>
            로그아웃
          </Button>
        ) : (
          <Button color="deep-purple" onClick={onClickLogin}>
            로그인
          </Button>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
