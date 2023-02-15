import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./tailwind.css";

import SignUp from "./chapter_11/SignUp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
);
