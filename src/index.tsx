import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./tailwind.css";

import DarkOrLight from "./chapter_14/DarkOrLight";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <DarkOrLight />
    </ThemeProvider>
  </React.StrictMode>
);
