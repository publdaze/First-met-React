import React, { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div className="p-4">소플과 함께하는 리액트 공부!</div>
    </div>
  );
};

export default LandingPage;
