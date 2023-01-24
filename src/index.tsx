import React from "react";
import ReactDOM from "react-dom/client";
import CommentList from "./chapter_05/CommentList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);
